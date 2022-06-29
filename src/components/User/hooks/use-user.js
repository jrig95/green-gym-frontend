import axios from "axios";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";
import { useQuery } from "react-query";
import { queryKeys } from "../../../react-query/constants";
// have a axios call to get the user

const getUser = async (id, bearerToken) => {
  const { data } = await axios(`${baseUrl}/users/${id}`, {
    headers: {
      Authorization: bearerToken
    }
  });

  return data;
};

export const useUser = (id) => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isLoading, isError, error } = useQuery(queryKeys.user, () => getUser(id, bearerToken), {
    onError: (error) => {
      const title =
        error instanceof Error
          ? error.message
          : "error connecting to server";
      addError(title, error.message);
    },
  });

  return { data, isLoading, isError, error };
};
