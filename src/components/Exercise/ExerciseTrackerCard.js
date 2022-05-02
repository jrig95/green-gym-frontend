import classes from "./ExerciseTrackerCard.module.css";
import Card from "../UI/Card";
import ExerciseTrackerCardRow from "./ExerciseTrackerCardRow";

import data from "../../program.json";

const ExerciseTrackerCard = ({ exerciseIndex }) => {
  const exerciseTrackerCardRows = data.daily_workouts[0].exercises.map(
    (exercise) => {
      const isActive = exercise.id === data.daily_workouts[0].exercises[exerciseIndex].id;

      return (
        <ExerciseTrackerCardRow
          exercise={exercise.exercise_title}
          work={exercise.exercise_work_time}
          rest={exercise.exercise_rest_time}
          rowActive={isActive}
        />
      );
    }
  );

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
      {exerciseTrackerCardRows}
    </Card>
  );
};

export default ExerciseTrackerCard;
