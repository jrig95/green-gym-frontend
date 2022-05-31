import axios from "axios";
import { useQuery } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";
import { queryKeys } from "../../../react-query/constants";

const getFiveDayArray = async (programTrackerId) => {
  const { data } = await axios(
    `${baseUrl}/program_trackers/${programTrackerId}/five_day_array`
  );

  return data;
};

export const useFiveDayArray = (programTrackerId) => {
  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isLoading, refetch } = useQuery(queryKeys.five_day_array, () => getFiveDayArray(programTrackerId), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { data, isLoading, refetch }
};
