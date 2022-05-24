import axios from "axios";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { useMutation } from "react-query";
import { userBaseUrl } from "../../../axiosInstance/user-constants";
import { queryKeys } from "../../../react-query/constants";
import { useContext } from "react";


const createUserSignup = async (user) => {
  const { data: response, headers } = await axios
    .post(`${userBaseUrl}/signup`, { user: user })

  return { response, headers };
};

export const useUserSignup = () => {
  const authCtx = useContext(AuthContext);

  const { addError } = useAPIError();
  const { mutate } = useMutation(
    queryKeys.user,
    (user) => createUserSignup(user),
    {
      onSuccess: (data) => {
        // here we set the bearer token to context
        
        console.log(data.headers.authorization, "these is bareer token");
        // const token = data.headers.authorization
        // here we can set the user id
        console.log(data.response.data.id, "this is the user id");
        // const userId = data.response.data.id
        console.log(data.response.data.admin, "this is the admin boolean");
        // const admin = data.response.data.admin

        const userData = {
          token: data.headers.authorization,
          userId: data.response.data.id,
          admin: data.response.data.admin
        }

        authCtx.login(userData);
      },
      onError: (error) => {
        console.log(error);
        console.log(error.response.data.status.message);
        const title =
          error instanceof Error
            ? error.response.data.status.message
            : "error connecting to server";
        addError(title, error);
      },
    }
  );


  return mutate;
};
