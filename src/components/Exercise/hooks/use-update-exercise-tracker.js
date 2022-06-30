import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateExercise = async (exercise, bearerToken) => {
  await axios.patch(
    `${baseUrl}/program_trackers/${exercise.program_tracker_id}/daily_workout_trackers/${exercise.daily_workout_tracker_id}/exercise_trackers/${exercise.id}`,
    { exercise_tracker: exercise },
    {
      headers: {
        Authorization: bearerToken
      }
    }
  );
};

export const useUpdateExercise = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate } = useMutation((exercise) => updateExercise(exercise, bearerToken), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
