import axios from "axios";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/constants";
// have a axios call to get the user

const getUser = async (id) => {
  const { data } = await axios(`${baseUrl}/users/${id}`);

  return data;
};

export const useUser = () => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data } = useQuery(queryKeys.user, (id) => getUser(id), {
    onError: (error) => {
      const title =
        error instanceof Error
          ? error.response.data
          : "error connecting to server";
      addError(title, error.response.status);
    },
  });

  return { data };
};
