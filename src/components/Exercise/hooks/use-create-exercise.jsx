import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createExercise = async (exercise, bearerToken) => {
  await axios.post(
    `${baseUrl}/programs/${exercise.program_id}/daily_workouts/${exercise.daily_workout_id}/exercises`,
    { exercise: exercise },
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useCreateExercise = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (exercise) => createExercise(exercise, bearerToken),
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
