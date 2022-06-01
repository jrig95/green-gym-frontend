import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getDailyWorkoutTracker = async (programTrackerId, workoutTrackerId) => {
  const { data } = await axios(`${baseUrl}/program_trackers/${programTrackerId}/daily_workout_trackers/${workoutTrackerId}`);

  return data;
}

export const useDailyWorkoutTracker = (programTrackerId, workoutTrackerId) => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isError, error, isLoading, refetch } = useQuery(queryKeys.workout_tracker, () => getDailyWorkoutTracker(programTrackerId, workoutTrackerId), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { data, isLoading, refetch }
};