import { useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { useUser } from "../User/hooks/use-user";
import DailyExercises from "./DailyExercises";
import { getIdsFromSlug } from "../../utils/get-ids-from-slug";
import { useParams } from "react-router-dom";
import classes from "./DailyWorkout.module.css";
import { useProgram } from "../Program/hooks/use-program";
import { useGetProgramTracker } from "../Trackers/hooks/use-program-tracker";

const DailyWorkout = ({userData, ids }) => {
  // const authCtx = useContext(AuthContext);
  // const params = useParams();

  // const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  // const ids = getIdsFromSlug(params.workoutId);

  // TODO: Add program id to authCtx and get the id from context.

  // TODO: get the programId
  const programId = userData.programs[0].id;
  // TODO: get the programe tacker id
  const programTrackerId = userData.program_trackers[0].id;

  // TODO: Get workout from backend
  const workoutId = ids.workoutId;
  // TODO: Get workout tracker from backend
  const workoutTrackerId = ids.workoutTrackerId;

  // User id has the program id - get from here
  const { data: programData, isLoading: programDataIsLaoding } =
    useProgram(programId);
  const { data: programTrackerData, isLoading: programTrackerIsLoading } =
    useGetProgramTracker(programTrackerId);
  // user id has the program_tracker id - get from here.

  // declare current day using let
  // add is loading with programData and programTackerData
  // if not loading save currenty day
  let currentDay;
  let currentDailyWorkoutTrackerId;
  let currentDailyWorkoutId;

  if (!programTrackerIsLoading && !programDataIsLaoding) {
    currentDay = programTrackerData.current_day;
    currentDailyWorkoutTrackerId = programTrackerData.daily_workout_trackers[currentDay].id;
    currentDailyWorkoutId = programData.daily_workouts[currentDay].id;
  }

  // use to call both
  // from the program find out the current day number
  // use this number to find the position inthe array of both the program and programs tracker daily workouts
  // safe both of these and send them to the next page.

  if (programDataIsLaoding || programTrackerIsLoading) return <p>Loading...</p>;

  return (
    <div>
      <DailyExercises
        userData={userData}
        programId={programId}
        programTrackerId={programTrackerId}
        workoutId={currentDailyWorkoutId}
        workoutTrackerId={currentDailyWorkoutTrackerId}
      />
    </div>
  );
};

export default DailyWorkout;
