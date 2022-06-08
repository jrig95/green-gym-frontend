import LoadingSpinner from "../UI/LoadingSpinner";
import { useWorkout } from "../Exercise/hooks/use-workout";
import classes from "./ProgramWorkoutDetails.module.css";
import ExerciseOverviewCard from "../Exercise/ExerciseOverviewCard";
import ExerciseCard from "../Exercise/ExerciseCard";

const ProgramWorkoutDetails = ({ programId, dailyWorkoutId, admin }) => {
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

  if (workoutIsLoading) return <LoadingSpinner />;

  return (
    <div className={classes.workoutCard}>
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
    </div>
  );
};

export default ProgramWorkoutDetails;
