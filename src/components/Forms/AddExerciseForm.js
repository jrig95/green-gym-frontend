import { Fragment, useEffect } from "react";
import classes from "./AddExerciseForm.module.css";
import useInput from "./Hooks/use-input";

const AddExerciseForm = ({ exerciseNumber, getExerciseData }) => {
  const textNotEmpty = (value) => value !== "";
  const selectIsValid = (value) => {
    return (
      value !== "select a time..." &&
      value !== "" &&
      value !== "select a video..."
    );
  };

  const getExerciseDataHandler = () => {
    const exercise = {
      exerciseNumber,
      title: exerciseTitleValue,
      workTime: workTimeValue,
      restTime: restTimeValue,
      libraryItem: libraryItemValue
    };

    getExerciseData(exercise);
  };

  const videoLibrary = ["video one", "video two"].map((video, index) => {
    return (
      <option key={index} value={video}>
        {video}
      </option>
    );
  });

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

  useEffect(() => {
    console.log(workTimeValue);
    console.log(workTimeHasError);
    console.log(workTimeIsValid);
  }, [workTimeValue]);

  return (
    <Fragment>
      <div className={classes.formGrid}>
        <div className={classes.number}>{exerciseNumber}</div>
        <div className={classes.title}>
          <label htmlFor={`exercise_${exerciseNumber}`}>Title</label>
          <input
            type="text"
            id={`exercise_${exerciseNumber}`}
            value={exerciseTitleValue}
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
            value={workTimeValue}
            onChange={workTimeChangeHandler}
          >
            <option>select a time...</option>
            <option value={10}>10 secs</option>
            <option value={15}>15 secs</option>
            <option value={20}>20 secs</option>
            <option value={25}>25 secs</option>
            <option value={30}>30 secs</option>
            <option value={35}>35 secs</option>
            <option value={40}>40 secs</option>
            <option value={45}>45 secs</option>
            <option value={50}>50 secs</option>
            <option value={55}>55 secs</option>
            <option value={60}>60 secs</option>
          </select>
        </div>
        <div className={classes.restTime}>
          <label
            htmlFor={`exercise_${exerciseNumber}_rest_time`}
            value={restTimeValue}
            onChange={restTimeChangeHandler}
            onBlur={restTimeBlurHandler}
          >
            Rest Time
          </label>
          <select
            name={`exercise_${exerciseNumber}_rest_time`}
            id={`exercise_${exerciseNumber}_rest_time`}
          >
            <option>select a time...</option>
            <option value={10}>10 secs</option>
            <option value={15}>15 secs</option>
            <option value={20}>20 secs</option>
            <option value={25}>25 secs</option>
            <option value={30}>30 secs</option>
            <option value={35}>35 secs</option>
            <option value={40}>40 secs</option>
            <option value={45}>45 secs</option>
            <option value={50}>50 secs</option>
            <option value={55}>55 secs</option>
            <option value={60}>60 secs</option>
          </select>
        </div>
        <div className={classes.libraryItem}>
          <label htmlFor={`exercise_${exerciseNumber}_library_item`}>
            Video
          </label>
          <select
            name={`exercise_${exerciseNumber}_library_item`}
            id={`exercise_${exerciseNumber}_library_item`}
          >
            <option>select a video...</option>
            {videoLibrary}
          </select>
        </div>
        <div className={classes.addButton}>
          <button onClick={getExerciseDataHandler}>
            add
            {/* {overviewIsSubmitted ? "added" : "add"} */}
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
