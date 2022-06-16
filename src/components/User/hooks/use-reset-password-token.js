import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createResetPasswordToken = async (user) => {
  await axios.post(`${baseUrl}/forgot_password`, user);
};

export const useResetPasswordToken = () => {
  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation(
    (user) => createResetPasswordToken(user),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { mutate, isSuccess };
};
