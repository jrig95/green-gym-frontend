import axios from "axios";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { useMutation } from "react-query";
import { userBaseUrl } from "../../../axiosInstance/user-constants";
import { queryKeys } from "../../../react-query/constants";
import { useContext } from "react";

const createUserSignup = async (user) => {
  const { data: response, headers } = await axios.post(
    `${userBaseUrl}/signup`,
    { user: user }
  );

  return { response, headers };
};

export const useUserSignup = () => {
  const authCtx = useContext(AuthContext);

  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation(
    queryKeys.user,
    (user) => createUserSignup(user),
    {
      onSuccess: (data) => {
        const expirationTime = new Date(new Date().getTime() + 10800000);

        const userData = {
          token: data.headers.authorization,
          userId: data.response.data.id,
          admin: data.response.data.admin,
          expirationTime: expirationTime.toISOString(),
        };

        authCtx.login(userData);
      },
      onError: (error) => {
        console.log(error);
        console.log(error.response.data.status.message);
        const title =
          error instanceof Error
            ? error.response.data.status.message
            : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { mutate, isSuccess };
};
