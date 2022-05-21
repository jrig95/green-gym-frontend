import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createProgram = async (program) => {
  await axios.post(`${baseUrl}/programs`, program);
};

export const useCreateProgram = () => {
  const { addError } = useAPIError();
  const fallback = [];

  const { mutate, data = fallback, isSuccess } = useMutation((program) => createProgram(program), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(program, error.status);
    }
  });

  return { mutate, data, isSuccess };
};
