import Button from "../UI/Button";
import classes from "./ExerciseTrackerCard.module.css";
import Card from "../UI/Card";
import ExerciseTrackerCardRow from "./ExerciseTrackerCardRow";
import { Fragment, useState } from "react";

// import data from "../../program.json";

const ExerciseTrackerCard = ({ exerciseIndex, exercises, isLoading }) => {
  const [repsArray, setRepsArray] = useState([]);

  const addRepsToArrayHandler = (data) => {
    setRepsArray((array) => [...array, data]);
  };

  const onFinishWorkoutHandler = () => {
    console.log(repsArray);
  };

  if (isLoading) return <p>Loading...</p>;

  const exerciseTrackerCardRows = exercises.map((exercise) => {
    const isActive = exercise.id === exercises[exerciseIndex].id;

    return (
      <ExerciseTrackerCardRow
        key={exercise.id}
        exercise={exercise.exercise_title}
        work={exercise.exercise_work_time}
        rest={exercise.exercise_rest_time}
        rowActive={isActive}
        getRepsData={addRepsToArrayHandler}
      />
    );
  });

  return (
    <Fragment>
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
      <div className={classes.buttonContainer}>
        <Button onClick={onFinishWorkoutHandler}>Finish Workout</Button>
      </div>
    </Fragment>
  );
};

export default ExerciseTrackerCard;
