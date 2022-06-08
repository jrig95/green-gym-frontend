import { useEffect } from "react";

import Button from "../UI/Button";
import useInput from "./Hooks/use-input";
import AdminFormCard from "../Forms/AdminFormCard";
import classes from "./Form.module.css";

const UpdateExerciseOverviewForm = ({ onClose }) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

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

  const exerciseTitleClasses = exerciseTitleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const numberOfSetsClasses = numberOfSetsHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formIsValid = exerciseTitleIsValid && numberOfSetsIsValid;

  return (
    <AdminFormCard title="Update Exercise Overview">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={exerciseTitleClasses}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={exerciseTitleValue}
              onChange={exerciseTitleChangeHandler}
              onBlur={exerciseTitleBlurHandler}
            />
            {exerciseTitleHasError && (
              <p className={classes.errorText}>Enter a valid title</p>
            )}
          </div>
          <div className={numberOfSetsClasses}>
            <label htmlFor="number_of_sets">Number of Sets</label>
            <input
              type="number"
              min={0}
              id="number_of_sets"
              value={numberOfSetsValue}
              onChange={numberOfSetsChangeHandler}
              onBlur={numberOfSetsBlurHandler}
            />
            {numberOfSetsHasError && (
              <p className={classes.errorText}>Enter valid number</p>
            )}
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={() => onClose()}>
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </AdminFormCard>
  );
};

export default UpdateExerciseOverviewForm;
