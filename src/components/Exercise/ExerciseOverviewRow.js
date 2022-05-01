import classes from './ExerciseOverviewCard.module.css';

const ExerciseOverviewRow = ({ exercise, sets}) => {
  return (
    <div className={classes.row}>
      <h3 className={classes.exerciseRow}>{exercise}</h3>
      <h3 className={classes.setsRow}>{sets}</h3>
    </div>
  );
};

export default ExerciseOverviewRow;