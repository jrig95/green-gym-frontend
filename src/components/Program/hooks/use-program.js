import axios from "axios";
import { useQuery } from "react-query";

// import { axiosInstance } from "../../../axiosInstance";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

// for when we need a query function for useQuery
const getProgram = async (id) => {
  const { data } = await axios(`${baseUrl}/programs/${id}`);
  return data;
};

export const usePrograms = (id) => {
  const fallback = [];
  const {
    data = fallback,
    isError,
    error,
    isLoading,
  } = useQuery(queryKeys.program, () => getProgram(id), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
    },
  });
  return { data, isError, error, isLoading };
};
