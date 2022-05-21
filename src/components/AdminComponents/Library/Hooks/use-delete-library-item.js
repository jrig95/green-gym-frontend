import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../../common/hooks/use-API-error";
import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const deleteLibraryItem = async (id) => {
  await axios.delete(`${baseUrl}/library_item/${id}`);
};

export const useDeleteLibraryItem = () => {
  const { addError } = useAPIError();

  const queryClient = useQueryClient();
  const { mutate } = useMutation((id) => deleteLibraryItem(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.libraryItem]);
    },
    onError: () => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return mutate;
};
