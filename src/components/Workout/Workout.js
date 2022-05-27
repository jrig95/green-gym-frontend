import classes from "./Workout.module.css";
import { Fragment, useState } from "react";

import { useProgram } from "../Program/hooks/use-program";
import { useGetProgramTracker } from "../Trackers/hooks/use-program-tracker";
import DailyCheckInCard from "./DailyCheckInCard";
import DailyWorkoutCard from "./DailyWorkoutCard";
import DailyChallengeCard from "./DailyChallengeCard";
import WorkoutDayTracker from "./WorkoutDayTracker";

const Workout = ({ userData }) => {
  const programId = userData.programs[0].id;

  // TODO: Add use Program tracker to find the tracker for this program
  const { data: programTrackerData, isLoading: programTrackerIsLoading } =
    useGetProgramTracker(userData.program_trackers[0].id);

  // TODO: Get the Program
  const { data: programData, isLoading: programIsLoading } =
    useProgram(programId);

  let dailyWorkout;
  let dailyWorkoutTracker;

  if (!programIsLoading && !programTrackerIsLoading) {
    // dailyWorkout = programData.daily_workouts[0];
    // dailyWorkoutTracker = programTrackerData

    console.log(programData.daily_workouts[0], "PROGRAM DATA");
    console.log(
      programTrackerData.daily_workout_trackers[0],
      "PROGRAM TRACKER"
    );
  }

  const [checkInIsComplete, setCheckInIsComplete] = useState(false);
  const [challengeIsComplete, setChallengeIsComplete] = useState(false);

  const checkInCompleteHandler = () => {
    setCheckInIsComplete(true);
    // Query call to update the challenge
  };

  const challengeCompleteHandler = () => {
    setChallengeIsComplete(true);

    // Query call to update the challenge
  };

  if (programIsLoading && programTrackerIsLoading) return <p>Loading...</p>;

  return (
    <Fragment>
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker programTitle={userData.programs[0].program_title} />
      </div>
      <div className={classes.cardsContainer}>
        <DailyCheckInCard getCompleted={checkInCompleteHandler} />
        <DailyWorkoutCard
          dailyWorkout={dailyWorkout}
          dailyWorkoutTracker={dailyWorkoutTracker}
        />
        <DailyChallengeCard getCompleted={challengeCompleteHandler} />
      </div>
    </Fragment>
  );
};

export default Workout;
