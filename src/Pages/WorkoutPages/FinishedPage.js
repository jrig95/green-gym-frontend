import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import classes from "./FinishedPage.module.css";
import { random } from "../../utils/random";

const FinishedPage = ({ workout }) => {
  const navigate = useNavigate();

  const okButtonClickHandler = () => {
    navigate("/activities");
  };

  const workoutMessageArray = [
    "Go hit the showers",
    "Remember to warm down",
    "Try some yoga",
  ];
  const dayMessageArray = [
    "Go and relax. See you tomorrow.",
    "Well done! See you tomorrow",
    "Try and resist that doughnut!",
  ];

  const message = workout
    ? random(workoutMessageArray)
    : random(dayMessageArray);
  const finishedMessage = workout ? "Workout Finished!" : "Day Finished!";

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{finishedMessage}</h1>
        <h3>{message}</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button onClick={okButtonClickHandler}>Continue</Button>
      </div>
    </div>
  );
};

export default FinishedPage;
