import { useState, useEffect } from "react";

import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AdminFormCard from "../Forms/AdminFormCard";
import classes from "./Form.module.css";
import { useLibraryItems } from "../AdminComponents/Library/Hooks/use-library-items";

const UpdateExerciseForm = () => {
  const [exerciseIsSubmitted, setExerciseIsSubmitted] = useState(false);
  const [exerciseTitlePlaceholder, setExerciseTitlePlaceholder] =
    useState("Title");
  const [caloriesPlaceholder, setCaloriesPlaceholder] = useState(0);

  // get all the library items
  const { data: libraryData } = useLibraryItems();

  const textNotEmpty = (value) => value !== "";

  const selectIsValid = (value) => {
    return value !== "select..." && value !== "";
  };

  const isANumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };

  const getExerciseDataHandler = () => {
    const updateQuestionValue = questioValue === "yes" ? true : false;

    // const exercise = {
    //   exerciseNumber,
    //   title: exerciseTitleValue,
    //   workTime: workTimeValue,
    //   restTime: restTimeValue,
    //   calories: caloriesValue,
    //   question: updateQuestionValue,
    //   libraryItem: libraryItemValue,
    // };

    // getExerciseData(exercise);
    setExerciseIsSubmitted(true);
  };

  const {
    value: exerciseTitleValue,
    isValid: exerciseTitleIsValid,
    hasError: exerciseTitleHasError,
    valueChangeHandler: exerciseTitleChangeHandler,
    inputBlurHandler: exerciseTitleBlurHandler,
    reset: resetExerciseTitle,
  } = useInput(textNotEmpty);

  const {
    value: workTimeValue,
    isValid: workTimeIsValid,
    hasError: workTimeHasError,
    valueChangeHandler: workTimeChangeHandler,
    inputBlurHandler: workTimeBlurHandler,
    reset: resetWorkTime,
  } = useInput(selectIsValid);

  const {
    value: restTimeValue,
    isValid: restTimeIsValid,
    hasError: restTimeHasError,
    valueChangeHandler: restTimeChangeHandler,
    inputBlurHandler: restTimeBlurHandler,
    reset: resetRestTime,
  } = useInput(selectIsValid);

  const {
    value: libraryItemValue,
    isValid: libraryItemIsValid,
    hasError: libraryItemHasError,
    valueChangeHandler: libraryItemChangeHandler,
    inputBlurHandler: libraryItemBlurHandler,
    reset: resetLibraryItem,
  } = useInput(selectIsValid);

  const {
    value: caloriesValue,
    isValid: caloriesIsValid,
    hasError: caloriesHasError,
    valueChangeHandler: caloriesChangeHandler,
    inputBlurHandler: caloriesBlurHandler,
    reset: resetCalories,
  } = useInput(isANumber);

  const {
    value: questioValue,
    isValid: questionValid,
    hasError: questionHasError,
    valueChangeHandler: questionChangeHandler,
    inputBlurHandler: questionBlurHandler,
    reset: resetQuestion,
  } = useInput(selectIsValid);

  const formIsValid =
    exerciseTitleIsValid &&
    workTimeIsValid &&
    restTimeIsValid &&
    libraryItemIsValid;

  useEffect(() => {
    if (exerciseIsSubmitted) {
      setExerciseTitlePlaceholder(exerciseTitleValue);
      setCaloriesPlaceholder(caloriesValue);
    }
  }, [exerciseIsSubmitted]);

  const exerciseTitleValueTernery = exerciseIsSubmitted
    ? ""
    : exerciseTitleValue;

  const workTimeValueTernery = exerciseIsSubmitted ? "" : workTimeValue;
  const restTimeValueTernery = exerciseIsSubmitted ? "" : restTimeValue;
  const libraryItemValueTernery = exerciseIsSubmitted ? "" : libraryItemValue;
  const caloriesValueTernery = exerciseIsSubmitted ? "" : caloriesValue;
  const questionValueTernery = exerciseIsSubmitted ? "" : questioValue;

  const restAndWorkOptions = Array.from({ length: 60 }, (_, i) => i + 1)
    .filter((num) => num % 5 === 0)
    .map((num) => {
      return (
        <option
          key={num}
          value={num}
          disabled={exerciseIsSubmitted}
          hidden={exerciseIsSubmitted}
        >
          {num} secs
        </option>
      );
    });

  const libraryItemOptions = libraryData.map((libraryItem) => {
    return (
      <option
        key={libraryItem.id}
        value={libraryItem.id}
        disabled={exerciseIsSubmitted}
        hidden={exerciseIsSubmitted}
      >
        {libraryItem.title}
      </option>
    );
  });

  const submittedClasses = exerciseIsSubmitted
    ? `${classes.formGrid} ${classes.titlesGrey}`
    : classes.formGrid;

  return (
    <AdminFormCard title="Update Exercise">
      <form>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor={`exercise`}>Title</label>
            <input
              type="text"
              id={`exercise`}
              value={exerciseTitleValueTernery}
              placeholder={exerciseTitlePlaceholder}
              onChange={exerciseTitleChangeHandler}
              onBlur={exerciseTitleBlurHandler}
            />
            {exerciseTitleHasError && (
              <p className={classes.errorText}>Enter a valid title</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_work_time`}>Work</label>
            <select
              name={`exercise_work_time`}
              id={`exercise_work_time`}
              value={workTimeValueTernery}
              onChange={workTimeChangeHandler}
              onBlur={workTimeBlurHandler}
              placeholder="test"
            >
              <option
                value="default"
                disabled={exerciseIsSubmitted}
                hidden={exerciseIsSubmitted}
              >
                select...
              </option>
              {restAndWorkOptions}
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_rest_time`}>Rest</label>
            <select
              name={`exercise_rest_time`}
              id={`exercise_rest_time`}
              value={restTimeValueTernery}
              onChange={restTimeChangeHandler}
              onBlur={restTimeBlurHandler}
            >
              <option
                value="default"
                disabled={exerciseIsSubmitted}
                hidden={exerciseIsSubmitted}
              >
                select...
              </option>
              {restAndWorkOptions}
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_calories`}>Calories</label>
            <input
              type="number"
              id={`exercise_calories`}
              value={caloriesValueTernery}
              placeholder={caloriesPlaceholder}
              onChange={caloriesChangeHandler}
              onBlur={caloriesBlurHandler}
            />
            {caloriesHasError && (
              <p className={classes.errorText}>Must be a number</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_rest_time`}>Question?</label>
            <select
              name={`exercise_rest_time`}
              id={`exercise_rest_time`}
              value={questionValueTernery}
              onChange={questionChangeHandler}
              onBlur={questionBlurHandler}
            >
              <option
                value="default"
                disabled={exerciseIsSubmitted}
                hidden={exerciseIsSubmitted}
              >
                select...
              </option>
              <option
                disabled={exerciseIsSubmitted}
                hidden={exerciseIsSubmitted}
              >
                yes
              </option>
              <option
                disabled={exerciseIsSubmitted}
                hidden={exerciseIsSubmitted}
              >
                no
              </option>
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_library_item`}>Video</label>
            <select
              name={`exercise_library_item`}
              id={`exercise_library_item`}
              value={libraryItemValueTernery}
              onChange={libraryItemChangeHandler}
              onBlur={libraryItemBlurHandler}
            >
              <option
                value="default"
                disabled={exerciseIsSubmitted}
                hidden={exerciseIsSubmitted}
              >
                select...
              </option>
              {libraryItemOptions}
            </select>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Add
            </Button>
          </div>
        </div>
      </form>
    </AdminFormCard>
  );
};

export default UpdateExerciseForm;
