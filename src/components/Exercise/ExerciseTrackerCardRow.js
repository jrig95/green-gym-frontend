import classes from "./ExerciseTrackerCard.module.css";

const ExerciseTrackerCardRow = () => {
  return (
    <div className={classes.row}>
      <p className={classes.exerciseRow}>Push Up - Set 1</p>
      <p className={classes.workRow}>45 secs</p>
      <p className={classes.restRow}>15secs</p>
      <div className={classes.questionContainer}>
        <form>
          <input type="number" />
        </form>
      </div>
    </div>
  );
};

export default ExerciseTrackerCardRow;
