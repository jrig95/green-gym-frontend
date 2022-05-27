import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../../../../react-query/constants";
import useAPIError from "../../../../common/hooks/use-API-error";
import { baseUrl } from "../../../../axiosInstance/constants";

const getMembers = async (searchParams) => {
  if (searchParams !== "") {
    const { data } = await axios(`${baseUrl}/users?query=${searchParams}`);

    return data;
  }

  if (searchParams === "") {
    const { data } = await axios(`${baseUrl}/users`);

    return data;
  }
};

export const useGetMembers = (searchParams) => {
  const { addError } = useAPIError();
  const { data, isLoading, refetch } = useQuery(
    queryKeys.members,
    () => getMembers(searchParams),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { data, isLoading, refetch };
};
