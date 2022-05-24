import axios from "axios";

import { userBaseUrl } from "../../../axiosInstance/user-constants";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/constants";
// have a axios call to get the user

const getUserSession = async () => {
  const { data } = await axios(`${userBaseUrl}/login`);

  return data;
};

export const useUser = () => {
  const fallback = [];
  const { data, isError, error, isLoading } = useQuery(
    queryKeys.user,
    getUserSession
  );

  return { data };
};
