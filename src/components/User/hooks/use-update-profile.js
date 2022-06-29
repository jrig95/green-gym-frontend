import axios from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProfile = async (user, bearerToken) => {
  await axios.patch(`${baseUrl}/users/${user.id}`, {
    user: user,
    headers: { Authorization: bearerToken },
  });
};

export const useUpdateProfile = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation(
    (user) => updateProfile(user, bearerToken),
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
