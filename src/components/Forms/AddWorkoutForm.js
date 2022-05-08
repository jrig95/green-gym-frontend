import AddExerciseForm from "./AddExerciseForm";
import AdminFormCard from "./AdminFormCard";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AddExerciseOverviewForm from "./AddExerciseOverviewForm";
import { useEffect, useState } from "react";

const AddWorkoutForm = () => {
  const [exerciseOverviewArray, setExerciseOverviewArray] = useState([]);
  const [exerciseArray, setExerciseArray] = useState([]);

  const textNotEmpty = (value) => value !== "";

  const isNotANumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };
  const {
    value: dailyChallengeValue,
    isValid: dailyChallengeIsValid,
    valueChangeHandler: dailyChallengeValueHandler,
    inputBlurHandler: dailyChallengeBlurHandler,
    reset: resetDailyChallenge,
  } = useInput(textNotEmpty);

  const {
    value: numberOfTypesValue,
    isValid: numberOfTypesIsValid,
    valueChangeHandler: numberOfTypesChangeHandler,
    inputBlurHandler: numberOfTypesBlurHandler,
    reset: resetNumberOfTypes,
  } = useInput(isNotANumber);

  const {
    value: numberOfExercisesValue,
    isValid: numberOfExercisesIsValid,
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

  useEffect(() => {
    console.log(exerciseOverviewArray);
  }, [exerciseOverviewArray]);

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

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const sortedExerciseOverviewArray = exerciseOverviewArray.sort(
      (a, b) => a.exerciseNumber - b.exerciseNumber
    );

    const sortedExerciseArray = exerciseArray.sort(
      (a, b) => a.exerciseNumber - b.exerciseNumber
    );

    console.log(sortedExerciseOverviewArray);
    console.log(sortedExerciseArray);
  };

  return (
    <AdminFormCard title="Day 1">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="description">
              Description (a few words describing what your users will be doing
              today)
            </label>
            <input type="text" id="description" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="daily_challenge">Daily Challenge</label>
            <input type="text" id="daily_challenge" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="daily_challenge_description">
              Daily Challenge Description
            </label>
            <input type="text" id="daily_challenge_description" />
          </div>
          <h3>
            Create an overview that will be displayed when users are
            browsing the programs.
          </h3>
          <div className={classes.formControl}>
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
          </div>
          {exerciseOverview}
          <h3>
            Create the exercises for the workout.
          </h3>
          <div className={classes.formControl}>
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
          </div>
          {exercises}
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              Cancel
            </Button>
            <Button size="small" type="submit">
              Add
            </Button>
          </div>
        </div>
      </form>
    </AdminFormCard>
  );
};

export default AddWorkoutForm;
