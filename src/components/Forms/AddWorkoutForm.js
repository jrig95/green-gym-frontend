import FormCard from "./FormCard";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AddExerciseOverviewForm from "./AddExerciseOverviewForm";
import { useState } from "react";

const AddWorkoutForm = () => {
  const [canGetExerciseOverview, setCanGetExerciseOverview] = useState(false);

  const textNotEmpty = (value) => value !== "";

  const isNotANumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };

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

  const {
    value: dailyChallengeValue,
    isValid: dailyChallengeIsValid,
    valueChangeHandler: dailyChallengeValueHandler,
    inputBlurHandler: dailyChallengeBlurHandler,
    reset: resetDailyChallenge,
  } = useInput(textNotEmpty);

  const times = parseInt(numberOfTypesValue);
  const numbersArray = Array.from({ length: times }, (_, i) => i + 1);
  
  let exerciseOverviewArray = [];

  const getOverviewDataHandler = (data) => {
    exerciseOverviewArray.push(data);
    console.log(exerciseOverviewArray);
  };
  
  const exerciseOverview = numbersArray.map((exercise) => {
    return (
      <AddExerciseOverviewForm
        key={exercise}
        exerciseNumber={exercise}
        getOverviewData={getOverviewDataHandler}
      />
    );
  });

  const formSubmitHandler = (event) => {  
    event.preventDefault();
  };

  return (
    <FormCard title="Day 1">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="description">
              Description (a few words describing what your users will be doing
              today)
            </label>
            <input type="text" id="description" />
          </div>
          <h3>
            Let's create an overview that will be displayed when users are
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
          <div className={classes.formControl}>
            <label htmlFor="number_of_exercises">
              Total Number of Exercises
            </label>
            <input type="number" min={0} id="number_of_exercises" />
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
    </FormCard>
  );
};

export default AddWorkoutForm;
