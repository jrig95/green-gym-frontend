import { Fragment } from "react";
import classes from "./AddExerciseOverviewForm.module.css";
import useInput from "./Hooks/use-input";

const AddExerciseOverviewForm = ({ exerciseNumber, getOverviewData, triggerGetOverview }) => {
  const textNotEmpty = (value) => value !== "";

  const isNotANumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number);
  };

  // if (triggerGetOverview) {
  //   const overviewData = {
  //     title: exerciseTitleValue,
  //     number_of_sets: numberOfSetsValue,
  //   };

  //   getOverviewData(overviewData);
  // }

  const onSubmit = () => {
    const overviewData = {
      title: exerciseTitleValue,
      number_of_sets: numberOfSetsValue,
    };

    getOverviewData(overviewData);
  };

  const {
    value: exerciseTitleValue,
    isValid: exerciseTitleIsValid,
    valueChangeHandler: exerciseTitleChangeHandler,
    inputBlurHandler: exerciseTitleBlurHandler,
    reset: resetExerciseTitle,
  } = useInput(textNotEmpty);

  const {
    value: numberOfSetsValue,
    isValid: numberOfSetsIsValid,
    valueChangeHandler: numberOfSetsChangeHandler,
    inputBlurHandler: numberOfSetsBlurHandler,
    reset: resetNumberOfSets,
  } = useInput(isNotANumber);

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
        <div className={classes.numberOfSets}>
          <label htmlFor={`exercise_${exerciseNumber}_sets`}>
            Number of Sets
          </label>
          <input
            type="number"
            min={0}
            id={`exercise_${exerciseNumber}_sets`}
            value={numberOfSetsValue}
            onChange={numberOfSetsChangeHandler}
            onBlur={numberOfSetsBlurHandler}
          />
        </div>
        <div className={classes.addButton}>
          <button onClick={onSubmit} >add</button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddExerciseOverviewForm;
