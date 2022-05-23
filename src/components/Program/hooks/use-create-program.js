import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const createProgram = async (program) => {
  await axios.post(`${baseUrl}/programs`, program);
};

export const useCreateProgram = () => {
  const { addError } = useAPIError();
  // const fallback = [];
  const queryClient = useQueryClient();
  const { mutate } = useMutation((program) => createProgram(program), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.programs]);
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
