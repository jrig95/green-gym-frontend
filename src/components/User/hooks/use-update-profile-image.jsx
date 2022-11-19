import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProfileImage = async (user, bearerToken) => {
  await axios.patch(`${baseUrl}/users/${user.id}`, user.photo, {
    headers: {
      Authorization: bearerToken
    }
  });
};

export const useUpdateProfileImage = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate } = useMutation((user) => updateProfileImage(user, bearerToken), {
    onError: (error) => {
      console.log(error);
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return mutate;
};