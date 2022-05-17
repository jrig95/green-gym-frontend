import axios from "axios";
import { useMutation } from "react-query";

import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const createRewards = async (reward) => {
  console.log(reward, 'createRewards');
  await axios.post(`${baseUrl}/rewards`, {
    data: reward,
  });
};

export const useCreateReward = (reward) => {
  console.log(reward, 'useCreateReward');
  const { mutate } = useMutation(() => createRewards(reward));

  return mutate;
};

// t.string "reward_name"
//     t.string "reward_image"
//     t.integer "reward_points"
