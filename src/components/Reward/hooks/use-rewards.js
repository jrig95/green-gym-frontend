import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getRewards = async () => {
  const {data} = await axios(`${baseUrl}/rewards`);
  return data;
};

export const useRewards = () => {
  const fallback = [];
  const { data = fallback, isError, error, isLoading } = useQuery(queryKeys.rewards, getRewards);

  return { data, isError, error, isLoading};
}