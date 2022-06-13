import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateReward = async (reward) => {
  console.log(reward);
  await axios.patch(`${baseUrl}/rewards/${reward.id}`, {
    reward: reward.reward,
  });
};

export const useUpdateReward = () => {
  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((reward) => updateReward(reward), {
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
