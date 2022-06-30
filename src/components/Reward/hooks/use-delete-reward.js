import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const deleteRewards = async (id, bearerToken) => {
  await axios.delete(`${baseUrl}/rewards/${id}`, {
    headers: {
      Authorization: bearerToken
    }
  });
};

export const useDeleteReward = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();

  const queryClient = useQueryClient();
  const { mutate } = useMutation((id) => deleteRewards(id, bearerToken), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.rewards]);
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
