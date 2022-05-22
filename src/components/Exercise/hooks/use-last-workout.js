import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getLastWorkout = async () => {
  const { data } = await axios(`${baseUrl}/last_workout`);

  return data;
};

export const useLastWorkout = () => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isError, error, isLoading } = useQuery(queryKeys.last_workout, getLastWorkout, {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
    // staleTime: 60000
  });

  return { data, isError, error, isLoading }
};