import { useState } from "react";

import UpdateWorkout from "../Workout/UpdateWorkout";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useWorkout } from "../Exercise/hooks/use-workout";
import classes from "./ProgramWorkoutDetails.module.css";
import ExerciseOverviewCard from "../Exercise/ExerciseOverviewCard";
import ExerciseCard from "../Exercise/ExerciseCard";
import Button from "../UI/Button";

const ProgramWorkoutDetails = ({ programId, dailyWorkoutId, admin }) => {
  const [updateWorkoutIsShown, setUpdateWorkingIsShown] = useState(false);

  // TODO: use programId to find dailyworkouts
  const { data: workoutData, isLoading: workoutIsLoading } = useWorkout(
    programId,
    dailyWorkoutId
  );

  // TODO: get the daily workout id
  // TODO: Add mutatios for program / daily workout / exercise / exercise overview
  // IF !admin -> exercise_overview
  // IF admin -> exercise_overviews and exercises

  // TODO: Create modal to update all aspects in this form.
  // TODO: Create modal to update the workout

  // TODO: User clocks on update day

  const showUpdateWorkoutHandler = () => {
    setUpdateWorkingIsShown(true);
    console.log(workoutData.day_number);
  };

  const hideUpdateWorkoutHandler = () => {
    setUpdateWorkingIsShown(false);
  };

  if (workoutIsLoading) return <LoadingSpinner />;

  return (
    <div className={classes.workoutCard}>
      {updateWorkoutIsShown && <UpdateWorkout
        workoutData={workoutData}
        workoutIsLoading={workoutIsLoading}
        onClose={hideUpdateWorkoutHandler}
      />}
      <h2>Day {workoutData.day_number}</h2>
      <p>{workoutData.description}</p>
      {!admin && (
        <ExerciseOverviewCard exercises={workoutData.exercise_overviews} />
      )}
      {admin && (
        <div>
          <h3>Exercise Overviews</h3>
          <ExerciseOverviewCard exercises={workoutData.exercise_overviews} />
          <h3>Exercises</h3>
          <ExerciseCard exercises={workoutData.exercises} />
        </div>
      )}
      {admin && (
        <Button color="blue" size="small" onClick={showUpdateWorkoutHandler}>
          Update Day {workoutData.day_number}
        </Button>
      )}
    </div>
  );
};

export default ProgramWorkoutDetails;