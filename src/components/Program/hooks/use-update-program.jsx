import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProgram = async (programData, bearerToken) => {
  return await axios.patch(
    `${baseUrl}/programs/${programData.id}`,
    programData,
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useUpdateProgram = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutateAsync, isError, isLoading, isSuccess } = useMutation(
    (program) => updateProgram(program, bearerToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.program]);
      },
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return {
    mutateAsync,
    isError,
    isLoading,
    isSuccess,
  };
};
