import Button from "../UI/Button";
import classes from "./ExerciseTrackerCard.module.css";
import Card from "../UI/Card";
import ExerciseTrackerCardRow from "./ExerciseTrackerCardRow";
import { Fragment, useState } from "react";

// import data from "../../program.json";

const ExerciseTrackerCard = ({ exerciseIndex, exercises, exerciseTrackers, isLoading }) => {
  const [repsArray, setRepsArray] = useState([]);

  const addRepsToArrayHandler = (data) => {
    setRepsArray((array) => [...array, data]);
  };

  const onFinishWorkoutHandler = () => {
    console.log(repsArray);

    // Itterate over the respArray and do mutate for each item in the array
    // need program_tracker_id, daily_workout_tracker_id and exercise_trakcer_id (this is already in array)
  };

  if (isLoading) return <p>Loading...</p>;

  const exerciseTrackerCardRows = exercises.map((exercise, index) => {
    const isActive = exercise.id === exercises[exerciseIndex].id;

    return (
      <ExerciseTrackerCardRow
        key={exercise.id}
        exercise={exercise.exercise_title}
        exerciseTrackerId={exerciseTrackers[index].id}
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
