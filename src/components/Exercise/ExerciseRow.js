import classes from "./ExerciseCard.module.css";
import { RiEdit2Fill } from "react-icons/ri";
import UpdateExercise from "./UpdateExercise";

const ExerciseRow = ({ name, work, rest, admin }) => {
  // ProgramID / WorkoutID / exerciseId
  // Hook to update exercise

  // Modal with Update Exercise Form

  return (
    <div className={classes.row}>
      <p className={classes.exerciseRow}>{name}</p>
      <p className={classes.workRow}>{work}</p>
      <p className={classes.restRow}>{rest}</p>
      {admin && (
        <div className={classes.edit}>
          <RiEdit2Fill />
        </div>
      )}
      <UpdateExercise />
    </div>
  );
};

export default ExerciseRow;
