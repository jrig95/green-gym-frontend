import classes from "./ExerciseCard.module.css";
import { RiEdit2Fill } from "react-icons/ri";
import UpdateExercise from "./UpdateExercise";
import { useState } from "react";

const ExerciseRow = ({ name, work, rest, admin, exercise, programId, dailyWorkoutId }) => {
  const [updateExerciseIsShown, setUpdateExerciseIsShown] = useState(false);

  // ProgramID / WorkoutID / exerciseId
  // Hook to update exercise

  // Modal with Update Exercise Form

  const showUpdateExerciseHandler = () => {
    setUpdateExerciseIsShown(true);
  };

  const hideUpdateExerciseHandler = () => {
    setUpdateExerciseIsShown(false);
  };

  return (
    <div className={classes.row}>
      <p className={classes.exerciseRow}>{name}</p>
      <p className={classes.workRow}>{work}</p>
      <p className={classes.restRow}>{rest}</p>
      {admin && (
        <div className={classes.edit}>
          <RiEdit2Fill onClick={showUpdateExerciseHandler} />
        </div>
      )}
      {updateExerciseIsShown && (
        <UpdateExercise
          exercise={exercise}
          onClose={hideUpdateExerciseHandler}
          programId={programId}
          dailyWorkoutId={dailyWorkoutId}
        />
      )}
    </div>
  );
};

export default ExerciseRow;
