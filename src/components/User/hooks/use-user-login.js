import axios from "axios";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { useMutation } from "react-query";
import { userBaseUrl } from "../../../axiosInstance/user-constants";
import { queryKeys } from "../../../react-query/constants";

const createUserLogin = async (user) => {
  const { data: response, headers } = await axios.post(`${userBaseUrl}/login`, {
    user: user,
  });

  return { response, headers };
};

export const useUserLogin = () => {
  const authCtx = useContext(AuthContext);

  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation(
    queryKeys.user,
    (user) => createUserLogin(user),
    {
      onSuccess: (data) => {
        const expirationTime = new Date(new Date().getTime() + 86400000);
        
        const userData = {
          token: data.headers.authorization,
          userId: data.response.data.id,
          admin: data.response.data.admin,
          expirationTime: expirationTime.toISOString(),
        };

        authCtx.login(userData);
      },
      onError: (error) => {
        const title =
          error instanceof Error
            ? error.response.data
            : "error connecting to server";
        addError(title, error.response.status);
      },
    }
  );

  return { mutate, isSuccess };
};
