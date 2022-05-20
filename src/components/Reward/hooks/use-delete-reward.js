import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const deleteRewards = async (id) => {
  await axios.delete(`${baseUrl}/rewards/${id}`);
};

export const useDeleteReward = () => {
  const { addError } = useAPIError();

  const queryClient = useQueryClient();
  const { mutate } = useMutation((id) => deleteRewards(id), {
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
