import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createRewardTracker = async (reward_tracker) => {
  await axios.post(`${baseUrl}/reward_trackers`, reward_tracker);
};

export const useCreateRewardTracker = () => {
  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation(
    (reward_tracker) => createRewardTracker(reward_tracker),
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
