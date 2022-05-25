import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProfile = async (user) => {
  await axios.patch(`${baseUrl}/users/${user.id}`, { user: user });
};

export const useUpdatePorfile = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((user) => updateProfile(user), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
