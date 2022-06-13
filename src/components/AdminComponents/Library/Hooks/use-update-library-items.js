import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../../common/hooks/use-API-error";
import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const updateLibraryItem = async (updatedLibraryItem) => {
  await axios.patch(`${baseUrl}/library_items/${updatedLibraryItem.id}`, updatedLibraryItem.library_item);
};

export const useUpdateLibraryItem = () => {
  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (libraryItem) => updateLibraryItem(libraryItem),
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

  return mutate;
};
