import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getExerciseTrackers = async (programTrackerId, workoutTrackerId) => {
  const { data } = await axios(
    `${baseUrl}/program_trackers/${programTrackerId}/daily_workout_trackers/${workoutTrackerId}/exercise_trackers`
  );

  return data;
};

export const useExerciseTrackers = (programTrackerId, workoutTrackerId) => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isError, error, isLoading } = useQuery(queryKeys.exercise_trackers, () => getExerciseTrackers(programTrackerId, workoutTrackerId), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecitng to server";
      addError(title, error.status);
    }
  });

  return { data, isError, error, isLoading }
}