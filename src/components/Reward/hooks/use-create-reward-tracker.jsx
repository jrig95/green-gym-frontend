import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createRewardTracker = async (reward_tracker, bearerToken) => {
  await axios.post(
    `${baseUrl}/reward_trackers`,
    { reward_tracker: reward_tracker },
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useCreateRewardTracker = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation(
    (reward_tracker) => createRewardTracker(reward_tracker, bearerToken),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { mutate, isSuccess };
};
