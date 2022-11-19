import { useEffect } from "react";

import { useUpdateExerciseInProgram } from "../Exercise/hooks/use-update-exercise-in-program";
import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AdminFormCard from "../Forms/AdminFormCard";
import classes from "./Form.module.css";
import { useLibraryItems } from "../AdminComponents/Library/Hooks/use-library-items";

const UpdateExerciseForm = ({
  exercise,
  onClose,
  programId,
  dailyworkoutId,
}) => {
  const { mutate: updateExercise, isSuccess: updateExerciseIsSuccess } =
    useUpdateExerciseInProgram();

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

  const {
    value: exerciseTitleValue,
    isValid: exerciseTitleIsValid,
    hasError: exerciseTitleHasError,
    valueChangeHandler: exerciseTitleChangeHandler,
    inputBlurHandler: exerciseTitleBlurHandler,
  } = useInput(textNotEmpty, exercise.exercise_title);

  const {
    value: workTimeValue,
    isValid: workTimeIsValid,
    valueChangeHandler: workTimeChangeHandler,
    inputBlurHandler: workTimeBlurHandler,
  } = useInput(selectIsValid, exercise.exercise_work_time);

  const {
    value: restTimeValue,
    isValid: restTimeIsValid,
    valueChangeHandler: restTimeChangeHandler,
    inputBlurHandler: restTimeBlurHandler,
  } = useInput(selectIsValid, exercise.exercise_rest_time);

  const {
    value: libraryItemValue,
    valueChangeHandler: libraryItemChangeHandler,
    inputBlurHandler: libraryItemBlurHandler,
  } = useInput(selectIsValid);

  const {
    value: caloriesValue,
    hasError: caloriesHasError,
    valueChangeHandler: caloriesChangeHandler,
    inputBlurHandler: caloriesBlurHandler,
  } = useInput(isANumber, exercise.calories_per_exercise);

  const getQuestionValue = exercise.exercise_question ? "yes" : "no";

  const {
    value: questioValue,
    valueChangeHandler: questionChangeHandler,
    inputBlurHandler: questionBlurHandler,
  } = useInput(selectIsValid, getQuestionValue);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const updateQuestionValue = questioValue === "yes" ? true : false;

    let newLibraryItemId;

    if (libraryItemValue === "") {
      newLibraryItemId = exercise.library_item.id;
    } else {
      newLibraryItemId = parseInt(libraryItemValue);
    }

    const newExercise = {
      programId,
      dailyworkoutId,
      id: exercise.id,
      exercise_title: exerciseTitleValue,
      exercise_work_time: workTimeValue,
      exercise_rest_time: restTimeValue,
      calories_per_exercise: caloriesValue,
      exercise_question: updateQuestionValue,
      library_item_id: newLibraryItemId,
    };

    // getExerciseData(exercise);
    // setExerciseIsSubmitted(true);
    updateExercise(newExercise);
  };

  useEffect(() => {
    if (updateExerciseIsSuccess) {
      onClose();
    }
  }, [updateExerciseIsSuccess, onClose]);

  const formIsValid =
    exerciseTitleIsValid && workTimeIsValid && restTimeIsValid;

  const restAndWorkOptions = Array.from({ length: 60 }, (_, i) => i + 1)
    .filter((num) => num % 5 === 0)
    .map((num) => {
      return (
        <option key={num} value={num}>
          {num} secs
        </option>
      );
    });

  const libraryItemOptions = libraryData.map((libraryItem) => {
    return (
      <option key={libraryItem.id} value={libraryItem.id}>
        {libraryItem.title}
      </option>
    );
  });

  return (
    <AdminFormCard title="Update Exercise">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor={`exercise`}>Title</label>
            <input
              type="text"
              id={`exercise`}
              value={exerciseTitleValue}
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
              value={workTimeValue}
              onChange={workTimeChangeHandler}
              onBlur={workTimeBlurHandler}
              placeholder="test"
            >
              <option value="default">select...</option>
              {restAndWorkOptions}
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_rest_time`}>Rest</label>
            <select
              name={`exercise_rest_time`}
              id={`exercise_rest_time`}
              value={restTimeValue}
              onChange={restTimeChangeHandler}
              onBlur={restTimeBlurHandler}
            >
              <option value="default">select...</option>
              {restAndWorkOptions}
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_calories`}>Calories</label>
            <input
              type="number"
              id={`exercise_calories`}
              value={caloriesValue}
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
              value={questioValue}
              onChange={questionChangeHandler}
              onBlur={questionBlurHandler}
            >
              <option value="default">select...</option>
              <option>yes</option>
              <option>no</option>
            </select>
          </div>
          <div className={classes.formControl}>
            <label htmlFor={`exercise_library_item`}>Video</label>
            <select
              name={`exercise_library_item`}
              id={`exercise_library_item`}
              value={libraryItemValue}
              onChange={libraryItemChangeHandler}
              onBlur={libraryItemBlurHandler}
            >
              <option value="default">select...</option>
              {libraryItemOptions}
            </select>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={() => onClose()}>
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
