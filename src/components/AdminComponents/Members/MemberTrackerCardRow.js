import classes from "./MemberTrackerCardRow.module.css";

const MemberTrackerCardRow = ({name, work, rest, reps}) => {
  const exerciseIsCompleted = reps > 0;
  
  return (
    <div className={classes.row}>
      <p className={classes.exerciseRow}>{name}</p>
      <p className={classes.workRow}>{work}s</p>
      <p className={classes.restRow}>{rest}s</p>
      <p className={classes.reps}>{reps}</p>
    </div>
  );
};

export default MemberTrackerCardRow;