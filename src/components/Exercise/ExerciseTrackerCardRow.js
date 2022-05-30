import { useState } from "react";
import { isANumber } from "../../utils/input-from-validations";
import useInput from "../Forms/Hooks/use-input";
import classes from "./ExerciseTrackerCard.module.css";

const ExerciseTrackerCardRow = ({ exercise, work, rest, rowActive, getRepsData, exerciseTrackerId, increaseNumberOfExercisesComplete }) => {
  const [exerciseIsAdded, setExerciseIsAdded] = useState(false);
  const rowClasses = rowActive
    ? `${classes.row} ${classes.rowActive}`
    : classes.row;

  const buttonClasses = rowActive ? `${classes.addButton} ${classes.addButtonActive}` : classes.addButton;

  // Get the value the user inputs here. Send it back up to daily exericses.

  const { value: repsValue, valueChangeHandler: repsChangeHandler } = useInput(
    isANumber,
    0
  );

  const addExerciseRepsValueHandler = () => {
    // use function that will send data back to previous component
    // I need the id of the exercise_tracker here
    const reps = {
      id: exerciseTrackerId,
      number_of_reps: repsValue
    }

    getRepsData(reps);
    setExerciseIsAdded(true);
    increaseNumberOfExercisesComplete();
  };

  return (
    <div className={rowClasses}>
      <p className={classes.exerciseRow}>{exercise}</p>
      <p className={classes.workRow}>{work} secs</p>
      <p className={classes.restRow}>{rest} secs</p>
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
        <button onClick={addExerciseRepsValueHandler} disabled={exerciseIsAdded}>Add</button>
      </div>
    </div>
  );
};

export default ExerciseTrackerCardRow;
