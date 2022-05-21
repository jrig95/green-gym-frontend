import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const createLibraryItem = async (libraryItem) => {
  await axios.post(`${baseUrl}/library_items`, libraryItem);
};

export const useCreateLibraryItem = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (libraryItem) => createLibraryItem(libraryItem),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.libraryItems]);
      },
    }
  );

  return mutate;
};
