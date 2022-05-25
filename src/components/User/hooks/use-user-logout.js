import axios from "axios";
import { useMutation } from "react-query";

import { userBaseUrl } from "../../../axiosInstance/user-constants";
// import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";

const userLogout = async (token) => {
  console.log(token);
  await axios.delete(`${userBaseUrl}/logout`, {
    headers: {
      Authorization: token,
    },
  });
};

export const useUserLogout = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((token) => userLogout(token), {
    onSuccess: () => {
      console.log("logged out");
    },
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
