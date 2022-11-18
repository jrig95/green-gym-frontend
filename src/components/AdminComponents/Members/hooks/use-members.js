import axios from "axios";
import { useQuery } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../../context/AuthContext";
import { queryKeys } from "../../../../react-query/constants";
import useAPIError from "../../../../common/hooks/use-API-error";
import { baseUrl } from "../../../../axiosInstance/constants";

const getMembers = async (searchParams, bearerToken) => {
  if (searchParams !== "") {
    const { data } = await axios(`${baseUrl}/users?query=${searchParams}`, {
      headers: {
        Authorization: bearerToken,
      },
    });

    return data;
  }

  if (searchParams === "") {
    const { data } = await axios(`${baseUrl}/users`, {
      headers: {
        Authorization: bearerToken,
      },
    });

    return data;
  }
};

export const useGetMembers = (searchParams) => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { data, isLoading, refetch, isError, error } = useQuery(
    [queryKeys.members],
    () => getMembers(searchParams, bearerToken),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { data, isLoading, refetch, isError, error };
};
