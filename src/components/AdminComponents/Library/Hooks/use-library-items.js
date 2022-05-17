import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const getLibraryItems = async () => {
  const { data } = await axios(`${baseUrl}/library_items`);

  return data;
};

export const useLibraryItems = () => {
  const fallback = [];
  const {
    data = fallback,
    isError,
    error,
    isLoading,
  } = useQuery(queryKeys.libraryItems, getLibraryItems, {
    onError: (error) => {
      console.log(error)
      const title =
        error instanceof Error ? error.message : "error connecting to server";
    },
  });

  return { data, isError, error, isLoading}
};
