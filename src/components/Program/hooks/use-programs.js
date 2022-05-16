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
  const { data } = useQuery(queryKeys.programs, getPrograms);
  return data;
};
