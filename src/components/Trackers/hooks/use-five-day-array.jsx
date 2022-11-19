import axios from "axios";
import { useQuery } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";
import { queryKeys } from "../../../react-query/constants";

const getFiveDayArray = async (programTrackerId, bearerToken) => {
  const { data } = await axios(
    `${baseUrl}/program_trackers/${programTrackerId}/five_day_array`, {
      headers: {
        Authorization: bearerToken
      }
    }
  );

  return data;
};

export const useFiveDayArray = (programTrackerId) => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const fallback = [];
  const { data = fallback, isLoading, refetch } = useQuery(queryKeys.five_day_array, () => getFiveDayArray(programTrackerId, bearerToken), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { data, isLoading, refetch }
};
