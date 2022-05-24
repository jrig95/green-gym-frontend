import axios from "axios";

import useAPIError from "../../../common/hooks/use-API-error";
import { useMutation, useQuery } from "react-query";
import { userBaseUrl } from "../../../axiosInstance/user-constants";
import { queryKeys } from "../../../react-query/constants";

const createUserLogin = async (user) => {
  await axios.post(`${userBaseUrl}/llogin`, user);
};

export const useUserLogin = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    queryKeys.user,
    (user) => createUserLogin(user),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
        console.log(error.response.data);
        const title =
          error instanceof Error ? error.response.data : "error connecting to server";
        addError(title, error);
      },
    }
  );

  return mutate;
};
