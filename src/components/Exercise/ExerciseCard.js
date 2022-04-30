import classes from "./ExerciseCard.module.css";
import Card from "../UI/Card";
import ExerciseRow from "./ExerciseRow";

const DUMMY_EXERCISES = [
  {
    id: "e1",
    name: "Push up - Set One",
    work: "45 secs",
    rest: "15 secs",
  },
  {
    id: "e2",
    name: "Burpee - Set One",
    work: "30 secs",
    rest: "15 secs",
  },
  {
    id: "e3",
    name: "Sit up - Set One",
    work: "50 secs",
    rest: "15 secs",
  },
  {
    id: "e4",
    name: "Push up - Set Two",
    work: "25 secs",
    rest: "15 secs",
  },
  {
    id: "e5",
    name: "Burpee - Set One",
    work: "30 secs",
    rest: "15 secs",
  },
  {
    id: "e6",
    name: "Sit up - Set One",
    work: "50 secs",
    rest: "15 secs",
  },
];

const ExerciseCard = () => {
  const exerciseRows = DUMMY_EXERCISES.map((exercise) => {
    return (
      <ExerciseRow
        name={exercise.name}
        work={exercise.work}
        rest={exercise.rest}
      />
    );
  });
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
      </div>
      {exerciseRows}
    </Card>
  );
};

export default ExerciseCard;
