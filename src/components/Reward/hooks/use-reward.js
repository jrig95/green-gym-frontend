import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getReward = async (id) => {
  const { data } = await axios(`${baseUrl}/rewards/${id}`);
  return data;
};

export const useReward = (id) => {
  const { addError } = useAPIError();

  const fallback = [];
  const {
    data = fallback,
    isError,
    error,
    isLoading,
  } = useQuery(queryKeys.reward, () => getReward(id), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { data, isError, error, isLoading };
};
