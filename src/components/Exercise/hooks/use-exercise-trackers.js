import axios from "axios";
import { useQuery } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getExerciseTrackers = async (programTrackerId, workoutTrackerId, bearerToken) => {
  const { data } = await axios(
    `${baseUrl}/program_trackers/${programTrackerId}/daily_workout_trackers/${workoutTrackerId}/exercise_trackers`, {
      headers: {
        Authorization: bearerToken
      }
    }
  );

  return data;
};

export const useExerciseTrackers = (programTrackerId, workoutTrackerId) => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isError, error, isLoading } = useQuery(queryKeys.exercise_trackers, () => getExerciseTrackers(programTrackerId, workoutTrackerId, bearerToken), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { data, isError, error, isLoading }
}