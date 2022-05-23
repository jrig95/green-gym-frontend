import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const deleteProgram = async (id) => {
  await axios.delete(`${baseUrl}/programs/${id}`);
};

export const useDeleteProgram = () => {
  const { addError } = useAPIError();

  const queryClient = useQueryClient();
  const { mutate } = useMutation((id) => deleteProgram(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.programs]);
    },
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return mutate;
};

