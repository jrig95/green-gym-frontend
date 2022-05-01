import classes from "./DailyWorkoutCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const DailyWorkoutCard = () => {
  return (
    <Card className={classes.container}>
      <h1>Daily Workout</h1>
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="workout"
      />
      <Button>Today's Workout</Button>
    </Card>
  );
};

export default DailyWorkoutCard;
