import classes from "./ExerciseCard.module.css";
import Card from "../UI/Card";
import ExerciseRow from './ExerciseRow';

const DUMMY_EXERCISES = [
  {
    id: 'e1',
    name: "Push up",
    work: '45 secs',
    rest: "15 secs"
  },
  {
    id: 'e2',
    name: "Burpee",
    work: '30 secs',
    rest: "15 secs"
  },
  {
    id: 'e3',
    name: "Sit up",
    work: '50 secs',
    rest: "15 secs"
  },
]

const ExerciseCard = () => {
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
    
    </Card>
  );
};

export default ExerciseCard;
