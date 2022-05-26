import classes from "./Workout.module.css";
import { Fragment, useState } from "react";

import { useGetProgramTracker } from "../Trackers/hooks/use-program-tracker";
import DailyCheckInCard from "./DailyCheckInCard";
import DailyWorkoutCard from "./DailyWorkoutCard";
import DailyChallengeCard from "./DailyChallengeCard";
import WorkoutDayTracker from "./WorkoutDayTracker";

const Workout = ({ userData }) => {
  console.log(userData.programs[0].program_title);
  console.log(userData.program_trackers[0].id);

  // TODO: Add use Program tracker to find the tracker for this program
  const { data: programTrackerData } = useGetProgramTracker(userData.program_trackers[0].id);

  console.log(programTrackerData);
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

  return (
    <Fragment>
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker programTitle={userData.programs[0].program_title} />
      </div>
      <div className={classes.cardsContainer}>
        <DailyCheckInCard getCompleted={checkInCompleteHandler} />
        <DailyWorkoutCard />
        <DailyChallengeCard getCompleted={challengeCompleteHandler} />
      </div>
    </Fragment>
  );
};

export default Workout;
