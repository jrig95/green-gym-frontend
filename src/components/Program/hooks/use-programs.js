import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";

// import { axiosInstance } from "../../../axiosInstance";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

// for when we need a query function for useQuery
const getPrograms = async () => {
  const { data } = await axios(`${baseUrl}/programs`);
  return data;
};

export const usePrograms = () => {
  const toast = useToast();
  const fallback = [];
  const {
    data = fallback,
    isError,
    error,
    isLoading,
  } = useQuery(queryKeys.programs, getPrograms, {
    onError: (error) => {
      const title = error instanceof Error ? error.message : 'error connecting to server';
      toast({ title, status: 'error', isClosable: true, position: 'bottom', variant: 'subtle'})
    }
  });
  return { data, isError, error, isLoading };
};
