import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../../../../react-query/constants";
import useAPIError from "../../../../common/hooks/use-API-error";
import { baseUrl } from "../../../../axiosInstance/constants";

const getMembers = async () => {
  const { data } = await axios(`${baseUrl}/users`);

  return data;
};

export const useGetMembers = () => {
  const { addError} = useAPIError();
  const { data, isLoading } = useQuery(queryKeys.members, getMembers, {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return { data, isLoading }
};
