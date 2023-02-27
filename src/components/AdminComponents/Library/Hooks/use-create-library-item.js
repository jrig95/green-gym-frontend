import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import useAPIError from "../../../../common/hooks/use-API-error";
import AuthContext from "../../../../context/AuthContext";
import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const createLibraryItem = async (libraryItem, bearerToken) => {
  return await axios.post(`${baseUrl}/library_items`, libraryItem, {
    headers: {
      Authorization: bearerToken,
    },
  });
};

export const useCreateLibraryItem = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;
  const { addError } = useAPIError();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (libraryItem) => createLibraryItem(libraryItem, bearerToken),
    {
      onSuccess: () => {
        queryClient.refetchQueries(queryKeys.libraryItems);
      },
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return mutate;
};
