import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../../context/AuthContext";
import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const createLibraryItem = async (libraryItem, barerToken) => {
  await axios.post(`${baseUrl}/library_items`, libraryItem, {
    headers: {
      Authorization: barerToken
    }
  });
};

export const useCreateLibraryItem = () => {
  const authCtx = useContext(AuthContext);
  const barerToken = authCtx;

  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (libraryItem) => () => createLibraryItem(libraryItem, barerToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.libraryItems]);
      },
    }
  );

  return mutate;
};
