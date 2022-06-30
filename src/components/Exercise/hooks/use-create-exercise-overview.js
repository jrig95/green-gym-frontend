import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createExerciseOverview = async (exerciseOverview, bearerToken) => {
  await axios.post(
    `${baseUrl}/programs/${exerciseOverview.programId}/daily_workouts/${exerciseOverview.daily_workout_id}/exercise_overviews`,
    { exercise_overview: exerciseOverview },
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useCreateExerciseOverview = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (exerciseOverview) => createExerciseOverview(exerciseOverview, bearerToken),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return mutate;
};
