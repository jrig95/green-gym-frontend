import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../../../../react-query/constants";
import { baseUrl } from "../../../../axiosInstance/constants";

const getLibraryItems = async (searchParams) => {
  console.log(searchParams);
  if (searchParams !== "") {
    const { data } = await axios(
      `${baseUrl}/library_items?query=${searchParams}`
    );

    return data;
  }

  if (searchParams === "") {
    const { data } = await axios(`${baseUrl}/library_items`);

    return data;
  }
};

export const useLibraryItems = (searchParams) => {
  if (searchParams === undefined) {
    searchParams = ""
  }

  const fallback = [];
  const {
    data = fallback,
    isError,
    error,
    isLoading,
    refetch
  } = useQuery(queryKeys.libraryItems, () => getLibraryItems(searchParams), {
    onError: (error) => {
      console.log(error);
      const title =
        error instanceof Error ? error.message : "error connecting to server";
    },
  });

  return { data, isError, error, isLoading, refetch };
};
