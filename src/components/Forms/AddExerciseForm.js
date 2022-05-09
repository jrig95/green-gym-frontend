import { Fragment, useEffect, useState } from "react";
import classes from "./AddExerciseForm.module.css";
import useInput from "./Hooks/use-input";

const AddExerciseForm = ({ exerciseNumber, getExerciseData }) => {
  const [exerciseIsSubmitted, setExerciseIsSubmitted] = useState(false);
  const [exerciseTitlePlaceHolder, setExerciseTitlePlaceHolder] =
    useState("Title");

  const textNotEmpty = (value) => value !== "";

  const selectIsValid = (value) => {
    return value !== "select..." && value !== "";
  };

  const getExerciseDataHandler = () => {
    const exercise = {
      exerciseNumber,
      title: exerciseTitleValue,
      workTime: workTimeValue,
      restTime: restTimeValue,
      libraryItem: libraryItemValue,
    };

    getExerciseData(exercise);
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

  const formIsValid =
    exerciseTitleIsValid &&
    workTimeIsValid &&
    restTimeIsValid &&
    libraryItemIsValid;

  useEffect(() => {
    if (exerciseIsSubmitted) {
      setExerciseTitlePlaceHolder(exerciseTitleValue);
    }
    console.log(exerciseTitleIsValid, 'exercise');
    console.log(restTimeIsValid, 'rest time');
    console.log(workTimeIsValid, 'work time');
    console.log(libraryItemIsValid, 'library item');
    console.log(exerciseTitleValue, 'exercise value');
    console.log(restTimeValue, 'rest time value');
    console.log(workTimeValue, 'work time value');
    console.log(libraryItemValue, 'library item value');
  }, [exerciseIsSubmitted, exerciseTitleIsValid]);

  const exerciseTitleValueTernery = exerciseIsSubmitted
    ? ""
    : exerciseTitleValue;

  const workTimeValueTernery = exerciseIsSubmitted ? "" : workTimeValue;
  const restTimeValueTernery = exerciseIsSubmitted ? "" : restTimeValue;
  const libraryItemValueTernery = exerciseIsSubmitted ? "" : libraryItemValue;

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

  const videoLibraryOptions = ["video one", "video two"].map((video, index) => {
    return (
      <option
        key={index}
        value={video}
        disabled={exerciseIsSubmitted}
        hidden={exerciseIsSubmitted}
      >
        {video}
      </option>
    );
  });

  return (
    <Fragment>
      <div className={classes.formGrid}>
        <div className={classes.number}>{exerciseNumber}</div>
        <div className={classes.title}>
          <label htmlFor={`exercise_${exerciseNumber}`}>Title</label>
          <input
            type="text"
            id={`exercise_${exerciseNumber}`}
            value={exerciseTitleValueTernery}
            placeholder={exerciseTitlePlaceHolder}
            onChange={exerciseTitleChangeHandler}
            onBlur={exerciseTitleBlurHandler}
          />
        </div>
        <div className={classes.workTime}>
          <label htmlFor={`exercise_${exerciseNumber}_work_time`}>
            Work Time
          </label>
          <select
            name={`exercise_${exerciseNumber}_work_time`}
            id={`exercise_${exerciseNumber}_work_time`}
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
        <div className={classes.restTime}>
          <label
            htmlFor={`exercise_${exerciseNumber}_rest_time`}
          >
            Rest Time
          </label>
          <select
            name={`exercise_${exerciseNumber}_rest_time`}
            id={`exercise_${exerciseNumber}_rest_time`}
            value={restTimeValue}
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
        <div className={classes.libraryItem}>
          <label htmlFor={`exercise_${exerciseNumber}_library_item`}>
            Video
          </label>
          <select
            name={`exercise_${exerciseNumber}_library_item`}
            id={`exercise_${exerciseNumber}_library_item`}
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
            {videoLibraryOptions}
          </select>
        </div>
        <div className={classes.addButton}>
          <button onClick={getExerciseDataHandler} disabled={!formIsValid}>
            {exerciseIsSubmitted ? "added" : "add"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddExerciseForm;

// {
//   "id": "e2",
//   "exercise_title": "Sit ups - set 1",
//   "exercise_work_time": "45 secs",
//   "exercise_rest_time": "15 secs",
//   "video": "www.youtube.com"
// },
