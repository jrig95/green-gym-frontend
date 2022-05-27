import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateProfileImage = async (user) => {
  await axios.patch(`${baseUrl}/users/${user.id}`, user.photo);
};

export const useUpdateProfileImage = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((user) => updateProfileImage(user), {
    onError: (error) => {
      console.log(error);
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return mutate;
};