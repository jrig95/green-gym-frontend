import classes from "./MemberTrackerCardRow.module.css";

const MemberTrackerCardRow = () => {
  return (
    <div className={classes.row}>
      <p className={classes.exerciseRow}>Push Up</p>
      <p className={classes.workRow}>0</p>
      <p className={classes.restRow}>0</p>
    </div>
  );
};

export default MemberTrackerCardRow;