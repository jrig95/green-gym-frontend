import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import { userBaseUrl } from "../../../axiosInstance/user-constants";
import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";

const userLogout = async (token) => {
  await axios.delete(`${userBaseUrl}/logout`, {
    headers: {
      Authorization: token,
    },
  });
};

export const useUserLogout = () => {
  const authCtx = useContext(AuthContext);
  const { addError } = useAPIError();
  const { mutate } = useMutation((token) => userLogout(token), {
    onSuccess: () => {
      authCtx.logout();
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
