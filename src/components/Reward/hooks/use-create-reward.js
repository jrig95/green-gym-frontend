import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const createRewards = async (reward) => {
  await axios.post(`${baseUrl}/rewards`, reward);
};

export const useCreateReward = () => {
  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation((reward) => createRewards(reward), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.rewards]);
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return { mutate, isSuccess };
};
