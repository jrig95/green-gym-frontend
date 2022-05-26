import { Fragment, useEffect, useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { useProgram } from "../../components/Program/hooks/use-program";
import { useUser } from "../../components/User/hooks/use-user";
import WorkoutDayTracker from "../../components/Workout/WorkoutDayTracker";
import Banner from "../../components/Layout/Banner";
import classes from "./ActivitiesPage.module.css";
import DailyCheckInCard from "../../components/Workout/DailyCheckInCard";
import DailyWorkoutCard from "../../components/Workout/DailyWorkoutCard";
import DailyChallengeCard from "../../components/Workout/DailyChallengeCard";

const ActivitiesPage = () => {
  const authCtx = useContext(AuthContext);
  // get the user
  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  let programId;

  if (!userIsLoading) {
    programId = userData.programs[0].id;
  }

  const { data: programData } = useProgram(programId);

  // console.log(programData);

  // TODO: get the information of the program. Can this be done via the login?
  // TODO: Pass today's workout to the DailyWorkout component
  // TODO: Pass the 5 day tracker to the WorkOutTracker component

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

  useEffect(() => {
    // console.log(challengeIsComplete);
  }, [challengeIsComplete]);

  return (
    <Fragment>
      <Banner title="My Activites" />
      <div className={classes.workoutDayTrackerContainer}>
        <WorkoutDayTracker />
      </div>
      <div className={classes.cardsContainer}>
        <DailyCheckInCard getCompleted={checkInCompleteHandler} />
        <DailyWorkoutCard />
        <DailyChallengeCard getCompleted={challengeCompleteHandler} />
      </div>
    </Fragment>
  );
};

export default ActivitiesPage;
