import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const verifyOtpCode = async (code) => {
  await axios.post(`${baseUrl}/verify_otp`, code)
};


export const useVerifyOtpCode = () => {
  const { addError } = useAPIError();

  const { mutate } = useMutation((code) => verifyOtpCode(code), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return mutate;
};
