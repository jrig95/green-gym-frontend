import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const createRewards = async (reward) => {
  console.log(reward, "createRewards");
  await axios.post(`${baseUrl}/rewards`, {
    reward: reward,
  });
};

export const useCreateReward = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((reward) => createRewards(reward), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.rewards]);
    },
  });

  return mutate;
};

// t.string "reward_name"
//     t.string "reward_image"
//     t.integer "reward_points"
