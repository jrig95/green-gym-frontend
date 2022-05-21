import { useLastProgram } from "../Program/hooks/use-last-program";
import AddExerciseForm from "./AddExerciseForm";
import AdminFormCard from "./AdminFormCard";
import classes from "./AddWorkoutForm.module.css";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AddExerciseOverviewForm from "./AddExerciseOverviewForm";
import { useState } from "react";

const AddWorkoutForm = ({ dayNumber, onAddWorkout }) => {
  const { data } = useLastProgram()

  console.log(data);

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

  const formSubmitHandler = () => {
    const sortedExerciseOverviewArray = exerciseOverviewArray.sort(
      (a, b) => a.exerciseNumber - b.exerciseNumber
    );

    const sortedExerciseArray = exerciseArray.sort(
      (a, b) => a.exerciseNumber - b.exerciseNumber
    );

    const workout = {
      workout_description: descriptionValue,
      daily_challenge: dailyChallengeValue,
      daily_challenge_description: dailyChallengeDescriptionValue,
      number_of_exercise_overview: numberOfTypesValue,
      exercise_overviews: sortedExerciseOverviewArray,
      number_of_exercises: numberOfExercisesValue,
      exercises: sortedExerciseArray,
    };

    console.log(workout);
    onAddWorkout();
  };

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
    numberOfTypesIsValid && numberOfExercisesIsValid;

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
            <Button size="small" disabled={!formIsValid} onClick={formSubmitHandler}>
              Add
            </Button>
          </div>
        </div>
      </form>
    </AdminFormCard>
  );
};

export default AddWorkoutForm;
