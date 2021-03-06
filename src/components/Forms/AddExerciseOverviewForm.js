import { Fragment, useEffect, useState } from "react";
import classes from "./AddExerciseOverviewForm.module.css";
import useInput from "./Hooks/use-input";

const AddExerciseOverviewForm = ({ exerciseNumber, getOverviewData }) => {
  const [overviewIsSubmitted, setOverviewIsSubmitted] = useState(false);
  const [exerciseTitlePlaceHolder, setExerciseTitlePlaceHolder] =
    useState("Title");
  const [numberOfRepsPlaceHolder, setNumberOfRepsPlaceHolder] = useState(0);

  const textNotEmpty = (value) => value !== "";

  const numberIsValid = (value) => {
    const number = parseInt(value);
    const isNumber = !isNaN(number);
    let isNotZero = false;
    if (isNumber) {
      isNotZero = number > 0;
    }
    const isTrue = isNumber && isNotZero;
    return isTrue;
  };

  const getOverviewDataHandler = () => {
    const overviewData = {
      exerciseNumber,
      title: exerciseTitleValue,
      number_of_sets: numberOfSetsValue,
    };

    getOverviewData(overviewData);
    setOverviewIsSubmitted(true);
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
    value: numberOfSetsValue,
    isValid: numberOfSetsIsValid,
    hasError: numberOfSetsHasError,
    valueChangeHandler: numberOfSetsChangeHandler,
    inputBlurHandler: numberOfSetsBlurHandler,
    reset: resetNumberOfSets,
  } = useInput(numberIsValid);

  const formIsValid = exerciseTitleIsValid && numberOfSetsIsValid;

  useEffect(() => {
    if (overviewIsSubmitted) {
      setExerciseTitlePlaceHolder(exerciseTitleValue);
      resetExerciseTitle();
      setNumberOfRepsPlaceHolder(numberOfSetsValue);
      resetNumberOfSets();
    }
  }, [
    overviewIsSubmitted,
    exerciseTitleValue,
    numberOfSetsValue,
    resetExerciseTitle,
    resetNumberOfSets,
  ]);

  const submittedClasses = overviewIsSubmitted
    ? `${classes.formGrid} ${classes.titlesGrey}`
    : classes.formGrid;

  const exerciseTitleValueTernery = overviewIsSubmitted
    ? ""
    : exerciseTitleValue;
  const numberOfSetsValueTernery = overviewIsSubmitted ? "" : numberOfSetsValue;

  return (
    <Fragment>
      <div className={submittedClasses}>
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
          {exerciseTitleHasError && (
            <p className={classes.errorText}>Enter a valid title</p>
          )}
        </div>
        <div className={classes.numberOfSets}>
          <label htmlFor={`exercise_${exerciseNumber}_sets`}>
            Number of Sets
          </label>
          <input
            type="number"
            min={0}
            id={`exercise_${exerciseNumber}_sets`}
            value={numberOfSetsValueTernery}
            placeholder={numberOfRepsPlaceHolder}
            onChange={numberOfSetsChangeHandler}
            onBlur={numberOfSetsBlurHandler}
          />
          {numberOfSetsHasError && (
            <p className={classes.errorText}>Enter valid number</p>
          )}
        </div>
        <div className={classes.addButton}>
          <button onClick={getOverviewDataHandler} disabled={!formIsValid}>
            {overviewIsSubmitted ? "added" : "add"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddExerciseOverviewForm;
