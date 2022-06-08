import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProgram = async (programData) => {
  const program = {
    program_title: programData.program_title,
    program_description: programData.program_description,
    price: programData.price,
  };
  await axios.patch(`${baseUrl}/programs/${programData.id}`, program);
};

export const useUpdateProgram = () => {
  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((programData) => updateProgram(programData), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.program]);
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
