import axios from "axios";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import { queryKeys } from "../../../react-query/constants";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProgramTracker = async (programTracker, bearerToken) => {
  await axios.patch(`${baseUrl}/program_trackers/${programTracker.id}`, {
    current_day: programTracker.current_day,
  },
  {
    headers: {
      Authorization: bearerToken
    }
  });
};

export const useUpdateProgramTracker = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const queryClient = useQueryClient();
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (programTracker) => updateProgramTracker(programTracker, bearerToken),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
      onSuccess: () => {
        queryClient.invalidateQueries([
          queryKeys.program,
          queryKeys.program_tracker,
        ]);
      },
    }
  );

  return mutate;
};
