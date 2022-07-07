import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import classes from "./WorkoutFinishedPage.module.css";

const WorkoutFinishedPage = () => {
  const navigate = useNavigate();

  const okButtonClickHandler = () => {
    navigate("/activities")
  };

  return (
    <div className={classes.container}>
      <h1>Workout Finished. Well done. Bla bla bla</h1>
      <Button onClick={okButtonClickHandler}>OK</Button>
    </div>
  );
};

export default WorkoutFinishedPage;
