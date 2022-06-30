import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../../context/AuthContext";
import useAPIError from "../../../../common/hooks/use-API-error";
import { baseUrl } from "../../../../axiosInstance/constants";

const createProgramTracker = async (userData, bearerToken) => {
  await axios.post(`${baseUrl}/program_trackers`, { program_tracker: userData }, {
    headers: {
      Authorization: bearerToken
    }
  });
};

export const useAddMemeberToProgram = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate } = useMutation((userData) => createProgramTracker(userData, bearerToken), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
    retry: 3,
  });

  return mutate;
};
