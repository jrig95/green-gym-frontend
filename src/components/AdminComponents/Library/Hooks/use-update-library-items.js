import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../../context/AuthContext";
import useAPIError from "../../../../common/hooks/use-API-error";
import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const updateLibraryItem = async (updatedLibraryItem, bearerToken) => {
  await axios.patch(
    `${baseUrl}/library_items/${updatedLibraryItem.id}`,
    updatedLibraryItem.library_item, {
      headers: {
        Authorization: bearerToken
      }
    }
  );
};

export const useUpdateLibraryItem = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation(
    (libraryItem) => updateLibraryItem(libraryItem, bearerToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.libraryItems]);
      },
      addError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { mutate, isSuccess };
};
