import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../../common/hooks/use-API-error";
import { baseUrl } from "../../../../axiosInstance/constants";

const createProgramTracker = async (userData) => {
  await axios.post(`${baseUrl}/program_trackers`, userData);
};

export const useAddMemeberToProgram = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((userData) => createProgramTracker(userData), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
    retry: 3,
  });

  return mutate;
};
