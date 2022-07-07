import { useState } from "react";
import useInput from "../Forms/Hooks/use-input";
import classes from "./ExerciseTrackerCard.module.css";
import { useTranslation } from "react-i18next";

const ExerciseTrackerCardRow = ({
  exercise,
  exerciseQuestion,
  work,
  rest,
  rowActive,
  getRepsData,
  exerciseTrackerId,
  increaseNumberOfExercisesComplete,
}) => {
  const { t } = useTranslation();
  const [exerciseIsAdded, setExerciseIsAdded] = useState(false);
  const rowClasses = rowActive
    ? `${classes.row} ${classes.rowActive}`
    : classes.row;

  const buttonClasses = rowActive
    ? `${classes.addButton} ${classes.addButtonActive}`
    : classes.addButton;

  // Get the value the user inputs here. Send it back up to daily exericses.

  const repIsANumber = (value) => {
    const number = parseInt(value);
    // console.log(typeof number);
    // console.log(!isNaN(number));
    // console.log(number > 0);
    return !isNaN(number) && number > 0;
  };

  const {
    value: repsValue,
    valueChangeHandler: repsChangeHandler,
    isValid: repsIsValid,
  } = useInput(repIsANumber, 0);

  const addExerciseRepsValueHandler = () => {
    // use function that will send data back to previous component
    // I need the id of the exercise_tracker here
    const reps = {
      id: exerciseTrackerId,
      number_of_reps: repsValue,
    };

    getRepsData(reps);
    setExerciseIsAdded(true);
    increaseNumberOfExercisesComplete();
  };

  return (
    <div className={rowClasses}>
      <p className={classes.exerciseRow}>{exercise}</p>
      <p className={classes.workRow}>{work} {t("exercise_tracker_card_row_sec")}</p>
      <p className={classes.restRow}>{rest} {t("exercise_tracker_card_row_sec")}</p>
      {exerciseQuestion && (
        <>
          <div className={classes.questionContainer}>
            <form>
              <input
                value={repsValue}
                onChange={repsChangeHandler}
                type="number"
                min={0}
                placeholder={0}
              />
            </form>
          </div>
          <div className={buttonClasses}>
            <button
              onClick={addExerciseRepsValueHandler}
              disabled={exerciseIsAdded || !repsIsValid}
            >
              {t("exercise_tracker_card_row_add")}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExerciseTrackerCardRow;
