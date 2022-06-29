import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateWorkout = async (workoutData, bearerToken) => {
  const daily_workout = {
    description: workoutData.description,
    daily_challenge_title: workoutData.daily_challenge_title,
    daily_challenge_description: workoutData.daily_challenge_description,
  };

  await axios.patch(
    `${baseUrl}/programs/${workoutData.programId}/daily_workouts/${workoutData.id}`,
    {daily_workout: daily_workout},
    {
      headers: {
        Authorization: bearerToken
      }
    }
  );
};

export const useUpdateWorkout = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation((workoutData) => updateWorkout(workoutData, bearerToken), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.workout]);
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error conneting to server";
      addError(title, error.statue);
    },
  });

  return { mutate, isSuccess };
};
