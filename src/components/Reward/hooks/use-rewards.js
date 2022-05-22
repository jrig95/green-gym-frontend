import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getRewards = async () => {
  const { data } = await axios(`${baseUrl}/rewards`);
  return data;
};

export const useRewards = () => {
  const { addError } = useAPIError();

  const fallback = [];
  const {
    data = fallback,
    isError,
    error,
    isLoading,
  } = useQuery(queryKeys.rewards, getRewards, {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
    staleTime: Infinity,
  });

  return { data, isError, error, isLoading };
};
