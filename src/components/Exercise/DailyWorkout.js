import { useState } from "react";

import DailyExercises from "./DailyExercises";
import { getIdsFromSlug } from "../../utils/get-ids-from-slug";
import { useParams } from "react-router-dom";
import classes from "./DailyWorkout.module.css";


const DailyWorkout = () => {
  const params = useParams();

  const ids = getIdsFromSlug(params.workoutId);

  // TODO: Get workout from backend
  // TODO: Get workout tracker from backend

  return (
    <div>
      <DailyExercises />
    </div>
  );
};

export default DailyWorkout;
