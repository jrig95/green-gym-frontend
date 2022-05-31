import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProgramTracker = async (programTracker) => {
  console.log(programTracker);
  await axios.patch(
    `${baseUrl}/program_trackers/${programTracker.id}`,
    programTracker
  );
};

export const useUpdateProgramTracker = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (programTracker) => updateProgramTracker(programTracker),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
      onSuccess: (data) => {
        console.log(data)
      }
    }
  );

  return mutate;
};
