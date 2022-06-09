import classes from "./ExerciseOverviewCard.module.css";
import Card from "../UI/Card";
import ExerciseOverviewRow from "./ExerciseOverviewRow";

const ExerciseOverviewCard = ({ exercises, admin, programId }) => {
  const exerciseRows = exercises.map((exercise) => {
    return (
      <ExerciseOverviewRow
        key={exercise.id}
        exercise={exercise}
        sets={exercise.number_of_sets}
        admin={admin}
        programId={programId}
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
