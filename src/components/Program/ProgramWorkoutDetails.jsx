import { useState } from "react";

import UpdateWorkout from "../Workout/UpdateWorkout";
import classes from "./ProgramWorkoutDetails.module.css";
import ExerciseOverviewCard from "../Exercise/ExerciseOverviewCard";
import ExerciseCard from "../Exercise/ExerciseCard";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";


const ProgramWorkoutDetails = ({ programId, dailyWorkoutId, admin, workout: workoutData }) => {
  const { t } = useTranslation();
  const [updateWorkoutIsShown, setUpdateWorkingIsShown] = useState(false);



  // TODO: get the daily workout id
  // TODO: Add mutatios for program / daily workout / exercise / exercise overview
  // IF !admin -> exercise_overview
  // IF admin -> exercise_overviews and exercises

  // TODO: Create modal to update all aspects in this form.
  // TODO: Create modal to update the workout

  const showUpdateWorkoutHandler = () => {
    setUpdateWorkingIsShown(true);
  };

  const hideUpdateWorkoutHandler = () => {
    setUpdateWorkingIsShown(false);
  };


  return (
    <div className={classes.workoutCard}>
      {admin && (
        <div className={classes.updateWorkoutButtonContainer}>
          <Button color="blue" size="small" onClick={showUpdateWorkoutHandler}>
            Update Day {workoutData.day_number}
          </Button>
        </div>
      )}
      {updateWorkoutIsShown && (
        <UpdateWorkout
          programId={programId}
          workoutData={workoutData}
          workoutIsLoading={false}
          onClose={hideUpdateWorkoutHandler}
        />
      )}
      <h2>{t("program_workout_details_day")} {workoutData.day_number}</h2>
      <p>{workoutData.description}</p>
      {!admin && (
        <ExerciseOverviewCard
          exercises={workoutData.exercise_overviews}
          admin={admin}
        />
      )}
      {admin && (
        <div>
          <h3>Exercise Overviews</h3>
          <ExerciseOverviewCard
            exercises={workoutData.exercise_overviews}
            admin={admin}
            programId={programId}
          />
          <h3>Exercises</h3>
          <ExerciseCard
            exercises={workoutData.exercises}
            admin={admin}
            programId={programId}
            dailyWorkoutId={dailyWorkoutId}
          />
        </div>
      )}
    </div>
  );
};

export default ProgramWorkoutDetails;
