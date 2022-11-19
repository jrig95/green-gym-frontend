import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const resetPassword = async (user) => {
  await axios.post(`${baseUrl}/reset_password`, { user: user });
};

export const useResetPassword = () => {
  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation((user) => resetPassword(user), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return { mutate, isSuccess };
};
