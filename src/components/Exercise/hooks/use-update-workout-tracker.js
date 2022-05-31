import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const udpateDailyWorkoutTracker = async (dailyWorkoutTracker) => {
  await axios.patch(
    `${baseUrl}/program_trackers/${dailyWorkoutTracker.program_tracker_id}/daily_workout_trackers/${dailyWorkoutTracker.id}`,
    dailyWorkoutTracker
  );
};

export const useUpdateDailyWorkoutTracker = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((dailyWorkoutTracker) => udpateDailyWorkoutTracker(dailyWorkoutTracker), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error conneting to server";
      addError(title, error.status);
    }
  });

  return mutate;
}
