import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import { queryKeys } from "../../../react-query/constants";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const udpateDailyWorkoutTracker = async (dailyWorkoutTracker, bearerToken) => {
  await axios.patch(
    `${baseUrl}/program_trackers/${dailyWorkoutTracker.program_tracker_id}/daily_workout_trackers/${dailyWorkoutTracker.id}`,
    { daily_workout_tracker: dailyWorkoutTracker },
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useUpdateDailyWorkoutTracker = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const queryClient = useQueryClient();
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (dailyWorkoutTracker) =>
      udpateDailyWorkoutTracker(dailyWorkoutTracker, bearerToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          queryKeys.workout_tracker,
          queryKeys.five_day_array,
        ]);
      },
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error conneting to server";
        addError(title, error.status);
      },
    }
  );

  return mutate;
};
