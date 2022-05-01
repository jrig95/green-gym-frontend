import classes from "./ExerciseOverviewCard.module.css";
import Card from "../UI/Card";
import ExerciseOverviewRow from "./ExerciseOverviewRow";

const ExerciseOverviewCard = ({ exercises }) => {
  console.log(exercises, "line 6 - ExerciseOverviewCard.js");

  const exerciseRows = exercises.map((exercise) => {
    return (
      <ExerciseOverviewRow
        exercise={exercise.exercise_title}
        sets={exercise.number_of_sets}
      />
    );
  });

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <div className={classes.exerciseHeader}>
          <h2>Exercise</h2>
        </div>
        <div className={classes.setsHeader}>
          <h2>Sets</h2>
        </div>
      </div>
      {exerciseRows}
    </Card>
  );
};

export default ExerciseOverviewCard;