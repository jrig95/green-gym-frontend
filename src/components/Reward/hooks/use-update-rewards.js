import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateReward = async (updatedReward, bearerToken) => {
  await axios.patch(
    `${baseUrl}/rewards/${updatedReward.id}`,
    { reward: updatedReward.rewardData },
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useUpdateReward = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation(
    (reward) => updateReward(reward, bearerToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.rewards]);
      },
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { mutate, isSuccess };
};
