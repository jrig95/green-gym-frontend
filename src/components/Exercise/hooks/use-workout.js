import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getWorkout = async (prodramId, workoutId) => {
  // const { data } = await axios(
  //   `${baseUrl}/programs/${prodramId}/daily_workouts/${workoutId}`
  // );
  const { data } = await axios(
    `${baseUrl}/programs/438/daily_workouts/6746`
  );

  return data;
};

export const useWorkout = (programId, workoutId) => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isError, error, isLoading } = useQuery(queryKeys.workout, () => getWorkout(programId, workoutId), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });
  
  return { data, isError, error, isLoading };
};
