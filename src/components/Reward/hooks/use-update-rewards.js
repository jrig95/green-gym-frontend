import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateReward = async (updatedReward) => {
  await axios.patch(
    `${baseUrl}/rewards/${updatedReward.id}`,
    updatedReward.rewardData
  );
};

export const useUpdateReward = () => {
  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation((reward) => updateReward(reward), {
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
