import classes from "./ExerciseTrackerCard.module.css";
import Card from "../UI/Card";
import ExerciseTrackerCardRow from "./ExerciseTrackerCardRow";

const ExerciseTrackerCard = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <div className={classes.exerciseHeader}>
          <p>Exercise</p>
        </div>
        <div className={classes.workHeader}>
          <p>Work</p>
        </div>
        <div className={classes.restHeader}>
          <p>Rest</p>
        </div>
        <div className={classes.questionHeader}>
          <p>How Many?</p>
        </div>
      </div>
      <ExerciseTrackerCardRow />
    </Card>
  );
};

export default ExerciseTrackerCard;
