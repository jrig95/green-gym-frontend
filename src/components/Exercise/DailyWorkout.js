import { useState, useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { useUser } from "../User/hooks/use-user";
import DailyExercises from "./DailyExercises";
import { getIdsFromSlug } from "../../utils/get-ids-from-slug";
import { useParams } from "react-router-dom";
import classes from "./DailyWorkout.module.css";


const DailyWorkout = () => {
  const authCtx = useContext(AuthContext);
  const params = useParams();

  const { data: userData, isLoading: userIsLoading } = useUser(authCtx.userId);

  console.log(userData);
  
  const ids = getIdsFromSlug(params.workoutId);

  if (userIsLoading) return <p></p>


  // TODO: get the programId
  // TODO: get the programe tacker id

  // TODO: Get workout from backend
  // TODO: Get workout tracker from backend

  return (
    <div>
      <DailyExercises userData={userData} />
    </div>
  );
};

export default DailyWorkout;
