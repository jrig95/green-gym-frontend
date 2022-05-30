import Card from "../../UI/Card";
import classes from "./WorkoutFinishedCard.module.css";

const WorkoutFinishedCard = () => {
  return (
    <Card className={classes.container}>
      <h1 className={classes.title}>Workout Finished!!</h1>
    </Card>
  );
};

export default WorkoutFinishedCard;
