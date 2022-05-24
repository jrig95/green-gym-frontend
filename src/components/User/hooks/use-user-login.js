import axios from "axios";

import useAPIError from "../../../common/hooks/use-API-error";
import { useMutation } from "react-query";
import { userBaseUrl } from "../../../axiosInstance/user-constants";
import { queryKeys } from "../../../react-query/constants";

const createUserLogin = async (user) => {
  const { data, headers } = await axios.post(`${userBaseUrl}/login`, { user: user });

  return { data, headers };
};

export const useUserLogin = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    queryKeys.user,
    (user) => createUserLogin(user),
    {
      onSuccess: (data) => {
        console.log(data);
        // set logged in.
        // check if admin.
      },
      onError: (error) => {
        console.log(error);
        console.log(error.response.data);
        const title =
          error instanceof Error
            ? error.response.data
            : "error connecting to server";
        addError(title, error);
      },
    }
  );

  return mutate;
};
