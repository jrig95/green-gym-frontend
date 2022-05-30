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

  let currentDay;
  let dailyWorkout;
  let dailyWorkoutId;
  let dailyWorkoutTracker;
  let dailyWorkoutTrackerId;
  let programImage;
  let programTitle;

  console.log(programTrackerData.current_day);

  if (!programIsLoading && !programTrackerIsLoading) {
    // dailyWorkout = programData.daily_workouts[0];
    // dailyWorkoutTracker = programTrackerData
    // dayNumber = programData.day_number;
    // Get the current day from the programTrackerData
    currentDay = programTrackerData.current_day;
    // Use current day as index
    dailyWorkout = programData.daily_workouts[currentDay];
    dailyWorkoutId = programData.daily_workouts[currentDay].id;
    dailyWorkoutTracker = programTrackerData.daily_workout_trackers[currentDay];
    dailyWorkoutTrackerId = programTrackerData.daily_workout_trackers[currentDay].id;
    programImage = programData.photo_url;
    programTitle = programData.program_title;
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

  if (programIsLoading || programTrackerIsLoading) return <p>Loading...</p>;

  return (
    <Fragment>
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker programTitle={userData.programs[0].program_title} />
      </div>
      <div className={classes.cardsContainer}>
        <DailyCheckInCard
          dailyWorkoutTracker={dailyWorkoutTracker}
          getCompleted={checkInCompleteHandler}
        />
        <DailyWorkoutCard
          dailyWorkout={dailyWorkout}
          dailyWorkoutId={dailyWorkoutId}
          dailyWorkoutTrackerId={dailyWorkoutTrackerId}
          dailyWorkoutTracker={dailyWorkoutTracker}
          programImage={programImage}
          programTitle={programTitle}
        />
        <DailyChallengeCard
          dailyWorkout={dailyWorkout}
          dailyWorkoutTracker={dailyWorkoutTracker}
          getCompleted={challengeCompleteHandler}
        />
      </div>
    </Fragment>
  );
};

export default Workout;
