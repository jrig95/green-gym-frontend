import classes from "./ExerciseCard.module.css";

const ExerciseRow = ({ name, work, rest }) => {
  return (
    <div className={classes.row}>
      <p className={classes.exerciseRow}>{name}</p>
      <p className={classes.workRow}>{work}</p>
      <p className={classes.restRow}>{rest}</p>
    </div>
  );
};

export default ExerciseRow;
