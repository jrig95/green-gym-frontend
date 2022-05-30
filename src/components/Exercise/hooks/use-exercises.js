import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getExercises = async (prodramId, workoutId) => {
  const { data } = await axios(
    `${baseUrl}/programs/${prodramId}/daily_workouts/${workoutId}/exercises`
  );

  return data;
};

export const useExercises = (programId, workoutId) => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isError, error, isLoading, refetch } = useQuery(queryKeys.exercises, () => getExercises(programId, workoutId), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });
  
  return { data, isError, error, isLoading, refetch };
};
