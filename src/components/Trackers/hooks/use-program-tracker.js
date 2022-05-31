import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const getProgramTracker = async (id) => {
  const { data } = await axios(`${baseUrl}/program_trackers/${id}`);

  return data;
};

export const useGetProgramTracker = (id) => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isLoading, refetch } = useQuery(queryKeys.program_tracker, () => getProgramTracker(id), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });
  
  return { data, isLoading, refetch }
};

