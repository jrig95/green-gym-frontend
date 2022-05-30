import { Fragment, useEffect, useState } from "react";

import { useUpdateExercise } from "./hooks/use-update-exercise-tracker";
import Button from "../UI/Button";
import classes from "./ExerciseTrackerCard.module.css";
import Card from "../UI/Card";
import ExerciseTrackerCardRow from "./ExerciseTrackerCardRow";

// import data from "../../program.json";

const ExerciseTrackerCard = ({
  exerciseIndex,
  exercises,
  exerciseTrackers,
  isLoading,
  programTackerId,
  workoutTrackerId,
}) => {
  const [repsArray, setRepsArray] = useState([]);
  const [numberOfExercisesComplete, setNumberOfExercisesComplete] = useState(0);
  const [formIsComplete, setFormIsCompelte] = useState(true);
  const updateExercise = useUpdateExercise();

  const addRepsToArrayHandler = (data) => {
    setRepsArray((array) => [...array, data]);
  };

  const onFinishWorkoutHandler = () => {
    // TODO: Sort array so that it is in order of id number.
    const sortedRepsArray = repsArray.sort((a, b) => a.id - b.id);
    // Itterate over the respArray and do mutate for each item in the array
    sortedRepsArray.map((rep) => {
      const exercise_trakcer = {
        id: rep.id,
        program_tracker_id: programTackerId,
        daily_workout_tracker_id: workoutTrackerId,
        number_of_reps: rep.number_of_reps,
      };

      // call mutate here
      updateExercise(exercise_trakcer);
    });
    // need program_tracker_id, daily_workout_tracker_id and exercise_trakcer_id (this is already in array)
  };

  useEffect(() => {
    console.log(numberOfExercisesComplete);

    if (numberOfExercisesComplete === exerciseTrackers.length) {
      setFormIsCompelte(false);
    }
  }, [numberOfExercisesComplete])

  if (isLoading) return <p>Loading...</p>;

  const exerciseTrackerCardRows = exercises.map((exercise, index) => {
    const isActive = exercise.id === exercises[exerciseIndex].id;

    const exerciseIsComplete = () => {
      setNumberOfExercisesComplete((prevNum) => prevNum += 1);
    }

    return (
      <ExerciseTrackerCardRow
        key={exercise.id}
        exercise={exercise.exercise_title}
        exerciseTrackerId={exerciseTrackers[index].id}
        work={exercise.exercise_work_time}
        rest={exercise.exercise_rest_time}
        rowActive={isActive}
        getRepsData={addRepsToArrayHandler}
        increaseNumberOfExercisesComplete={exerciseIsComplete}
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
        <Button disabled={formIsComplete} onClick={onFinishWorkoutHandler}>{formIsComplete ? "Keep going!" : "Finish Workout"}</Button>
      </div>
    </Fragment>
  );
};

export default ExerciseTrackerCard;
