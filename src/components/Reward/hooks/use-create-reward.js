import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const createRewards = async (reward) => {
  await axios.post(`${baseUrl}/rewards`, reward);
};

export const useCreateReward = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((reward) => createRewards(reward), {
    onSuccess: () => {
      console.log("success")
      queryClient.invalidateQueries([queryKeys.rewards]);
    },
    onError: () => {
      console.log("Error")
    }
  });

  return mutate;
};


// {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
