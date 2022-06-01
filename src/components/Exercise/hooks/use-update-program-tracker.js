import axios from "axios";
import { QueryClient, useMutation, useQueryClient } from "react-query";

import { queryKeys } from "../../../react-query/constants";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProgramTracker = async (programTracker) => {
  console.log(programTracker);
  await axios.patch(`${baseUrl}/program_trackers/${programTracker.id}`, {
    current_day: programTracker.current_day,
  });
};

export const useUpdateProgramTracker = () => {
  const queryClient = useQueryClient();
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (programTracker) => updateProgramTracker(programTracker),
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