import classes from "./ExerciseTrackerCard.module.css";

const ExerciseTrackerCardRow = () => {

  const rowClasses = false ? `${classes.row} ${classes.rowActive}` : classes.row;

  return (
    <div className={rowClasses}>
      <p className={classes.exerciseRow}>Push Up - Set 1</p>
      <p className={classes.workRow}>45 secs</p>
      <p className={classes.restRow}>15secs</p>
      <div className={classes.questionContainer}>
        <form>
          <input type="number" min={0}/>
        </form>
      </div>
    </div>
  );
};

export default ExerciseTrackerCardRow;
