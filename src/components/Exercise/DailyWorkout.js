import { useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { useUser } from "../User/hooks/use-user";
import DailyExercises from "./DailyExercises";
import { getIdsFromSlug } from "../../utils/get-ids-from-slug";
import { useParams } from "react-router-dom";
import classes from "./DailyWorkout.module.css";
import { IoConstructOutline } from "react-icons/io5";

const DailyWorkout = () => {
  const authCtx = useContext(AuthContext);
  const params = useParams();

  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  console.log(userData);

  const ids = getIdsFromSlug(params.workoutId);

  console.log(ids);

  if (userIsLoading) return <p></p>;

  // TODO: get the programId
  const programId = userData.programs[0].id;
  // TODO: get the programe tacker id
  const programTackerId = userData.program_trackers[0].id;

  // TODO: Get workout from backend
  const workoutId = ids.workoutId;
  // TODO: Get workout tracker from backend
  const workoutTrackerId = ids.workoutTrackerId;

  console.log(programId, "programId");
  console.log(programTackerId, "programTackerId");
  console.log(workoutId, "workoutId");
  console.log(workoutTrackerId, "workoutTrackerId");

  return (
    <div>
      <DailyExercises
        userData={userData}
        programId={programId}
        programTackerId={programTackerId}
        workoutId={workoutId}
        workoutTrackerId={workoutTrackerId}
      />
    </div>
  );
};

export default DailyWorkout;
