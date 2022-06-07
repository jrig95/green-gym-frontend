import { useCreateExercise } from "../Exercise/hooks/use-create-exercise";
import { useCreateExerciseOverview } from "../Exercise/hooks/use-create-exercise-overview";
import { useCreateWorkout } from "../Exercise/hooks/use-create-workout";
import { useLastWorkout } from "../Exercise/hooks/use-last-workout";
import { useLastProgram } from "../Program/hooks/use-last-program";
import AddExerciseForm from "./AddExerciseForm";
import AdminFormCard from "./AdminFormCard";
import classes from "./AddWorkoutForm.module.css";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AddExerciseOverviewForm from "./AddExerciseOverviewForm";
import { useEffect, useState } from "react";

const AddWorkoutForm = ({ dayNumber, onAddWorkout }) => {
  const { mutate: createWorkout, isSuccess: createWorkoutIsSuccess } = useCreateWorkout();
  const createExerciseOverview = useCreateExerciseOverview();
  const createExercise = useCreateExercise();
  // how to get this once. then keep it the same.
  const { data: lastProgramData, refetch: refetchLastProgram } = useLastProgram();
  const { data: lastWorkoutData } = useLastWorkout();

  const [exerciseOverviewArray, setExerciseOverviewArray] = useState([]);
  const [exerciseArray, setExerciseArray] = useState([]);

  const textNotEmpty = (value) => value !== "";

  const isNotANumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    rest: resetDescription,
  } = useInput(textNotEmpty);

  const {
    value: dailyChallengeValue,
    isValid: dailyChallengeIsValid,
    hasError: dailyChallengeHasError,
    valueChangeHandler: dailyChallengeChangeHandler,
    inputBlurHandler: dailyChallengeBlurHandler,
    reset: resetDailyChallenge,
  } = useInput(textNotEmpty);

  const {
    value: dailyChallengeDescriptionValue,
    isValid: dailyChallengeDescriptionIsValid,
    hasError: dailyChallengeDescriptionHasError,
    valueChangeHandler: dailyChallengeDescriptionChangeHandler,
    inputBlurHandler: dailyChallengeDescriptionBlurHandler,
    reset: restDailyChallengeDescription,
  } = useInput(textNotEmpty);

  const {
    value: numberOfTypesValue,
    isValid: numberOfTypesIsValid,
    hasError: numberOfTypesHasError,
    valueChangeHandler: numberOfTypesChangeHandler,
    inputBlurHandler: numberOfTypesBlurHandler,
    reset: resetNumberOfTypes,
  } = useInput(isNotANumber);

  const {
    value: numberOfExercisesValue,
    isValid: numberOfExercisesIsValid,
    hasError: numberOfExercisesHasError,
    valueChangeHandler: numberOfExercisesChangeHandler,
    inputBlurHandler: numberOfExercisesBlurHandler,
    reset: resetNumberOfExercises,
  } = useInput(isNotANumber);

  const overviewTimes = parseInt(numberOfTypesValue);
  const overviewNumbersArray = Array.from(
    { length: overviewTimes },
    (_, i) => i + 1
  );

  const exerciseTimes = parseInt(numberOfExercisesValue);
  const exerciseNumbersArray = Array.from(
    { length: exerciseTimes },
    (_, i) => i + 1
  );

  const getOverviewDataHandler = (data) => {
    setExerciseOverviewArray((array) => [...array, data]);
  };

  const getExerciseDataHandler = (data) => {
    setExerciseArray((array) => [...array, data]);
  };

  const exerciseOverview = overviewNumbersArray.map((exercise) => {
    return (
      <AddExerciseOverviewForm
        key={exercise}
        exerciseNumber={exercise}
        getOverviewData={getOverviewDataHandler}
      />
    );
  });

  const exercises = exerciseNumbersArray.map((exercise) => {
    return (
      <AddExerciseForm
        key={exercise}
        exerciseNumber={exercise}
        getExerciseData={getExerciseDataHandler}
      />
    );
  });

  const preventFormSubmit = (event) => {
    event.preventDefault();
  };

  // This can't be constantly refetching
  useEffect(() => {
    refetchLastProgram();
  }, [])

  

  const formSubmitHandler = async () => {
    const daily_workout = {
      program_id: lastProgramData.id,
      day_number: dayNumber,
      description: descriptionValue,
      daily_challenge_title: dailyChallengeValue,
      daily_challenge_description: dailyChallengeDescriptionValue,
      // number_of_exercise_overview: numberOfTypesValue,
      // exercise_overviews: sortedExerciseOverviewArray,
      number_of_exercises: numberOfExercisesValue,
    };

    // 1. Send the workout data to the back end - find out what data is the work in the schema
    //  a. Go and create the use hook that will do this job first.
    const data = await createWorkout(daily_workout);
    // 2. Make this an await event.
    // 3. test to make sure this works before doing the below work.
    console.log(data);
    // 1. Itterate through the exercise overview array.
    // 2. On each itteration create the exercise overview
    // How to get the workout ID?
  };

  useEffect(() => {
    if (createWorkoutIsSuccess) {
      // console.log("success");
      addExercisesHandler();
      onAddWorkout();
    }
  }, [createWorkoutIsSuccess]);

  // If isSuccess

  // another function to add the overviews and exercises.
  const addExercisesHandler = () => {
    const sortedExerciseOverviewArray = exerciseOverviewArray.sort(
      (a, b) => a.exerciseNumber - b.exerciseNumber
    );

    const sortedExerciseArray = exerciseArray.sort(
      (a, b) => a.exerciseNumber - b.exerciseNumber
    );


    const workoutId = lastWorkoutData.id + 1;
    const programId = lastProgramData.id;

    // console.log(workoutId, "workout id inHandler");
    // console.log(programId, "program id inHandler");

    sortedExerciseOverviewArray.map((exerciseOverview) => {
      // console.log(workoutId, "workout id in exercise overviews");
      // console.log(programId, "workout id in exercise overviews");
      const exercise_overview = {
        program_id: programId,
        daily_workout_id: workoutId,
        overview_exercise_title: exerciseOverview.title,
        number_of_sets: exerciseOverview.number_of_sets,
      };
      // Post call to create overview
      createExerciseOverview(exercise_overview);
    });

    sortedExerciseArray.map((exerciseItem) => {
      // console.log(workoutId, "workout id in exercises");
      // console.log(programId, "workout id in exercises");
      const exercise = {
        program_id: programId,
        daily_workout_id: workoutId,
        exercise_title: exerciseItem.title,
        library_item_id: exerciseItem.libraryItem,
        exercise_work_time: exerciseItem.workTime,
        exercise_rest_time: exerciseItem.restTime,
        calories_per_exercise: parseInt(exerciseItem.calories),
        exercise_question: exerciseItem.question,
      }

      // Post call to create exercise
      createExercise(exercise);
    })
  };

  // get the last id for the daily workout
  // itteratte over the array and for each item post request.

  const descriptionClasses = descriptionHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const dailyChallengeClasses = dailyChallengeHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const dailyChallengeDescriptionClassses = dailyChallengeDescriptionHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const numberOfTypesClasses = numberOfTypesHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const numberOfExercisesClasses = numberOfExercisesHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid =
    descriptionIsValid &&
    dailyChallengeIsValid &&
    dailyChallengeDescriptionIsValid &&
    numberOfTypesIsValid &&
    numberOfExercisesIsValid;

  return (
    <AdminFormCard title={`Day ${dayNumber}`}>
      <form onSubmit={preventFormSubmit}>
        <div className={classes.controlGroup}>
          <div className={descriptionClasses}>
            <label htmlFor="description">
              Description (a few words describing what your users will be doing
              today)
            </label>
            <input
              type="text"
              id="description"
              value={descriptionValue}
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
            />
            {descriptionHasError && (
              <p className={classes.errorText}>Must include a description</p>
            )}
          </div>
          <div className={dailyChallengeClasses}>
            <label htmlFor="daily_challenge">Daily Challenge</label>
            <input
              type="text"
              id="daily_challenge"
              value={dailyChallengeValue}
              onChange={dailyChallengeChangeHandler}
              onBlur={dailyChallengeBlurHandler}
            />
            {dailyChallengeHasError && (
              <p className={classes.errorText}>Must include a description</p>
            )}
          </div>
          <div className={dailyChallengeDescriptionClassses}>
            <label htmlFor="daily_challenge_description">
              Daily Challenge Description
            </label>
            <input
              type="text"
              id="daily_challenge_description"
              value={dailyChallengeDescriptionValue}
              onChange={dailyChallengeDescriptionChangeHandler}
              onBlur={dailyChallengeDescriptionBlurHandler}
            />
            {dailyChallengeDescriptionHasError && (
              <p className={classes.errorText}>Must include a description</p>
            )}
          </div>
          <h3>
            Create an overview that will be displayed when users are browsing
            the programs.
          </h3>
          <div className={numberOfTypesClasses}>
            <label htmlFor="number_of_exercises">
              How many different types of Exercises?
            </label>
            <input
              type="number"
              min={0}
              id="number_of_exercises"
              value={numberOfTypesValue}
              onChange={numberOfTypesChangeHandler}
              onBlur={numberOfTypesBlurHandler}
            />
            {numberOfTypesHasError && (
              <p className={classes.errorText}>Must be a number</p>
            )}
          </div>
          {exerciseOverview}
          <h3>Create the exercises for the workout.</h3>
          <div className={numberOfExercisesClasses}>
            <label htmlFor="number_of_exercises">
              Total Number of Exercises
            </label>
            <input
              type="number"
              min={0}
              id="number_of_exercises"
              value={numberOfExercisesValue}
              onChange={numberOfExercisesChangeHandler}
              onBlur={numberOfExercisesBlurHandler}
            />
            {numberOfExercisesHasError && (
              <p className={classes.errorText}>Must be a number</p>
            )}
          </div>
          {exercises}
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              Cancel
            </Button>
            <Button
              size="small"
              disabled={!formIsValid}
              onClick={formSubmitHandler}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </AdminFormCard>
  );
};

export default AddWorkoutForm;
