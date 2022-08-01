import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const verifyOtpCode = async (code) => {
  const { data } = await axios.post(`${baseUrl}/verify_otp`, code)

  return data;
};


export const useVerifyOtpCode = () => {
  const { addError } = useAPIError();

  const { mutate, data, isSuccess } = useMutation((code) => verifyOtpCode(code), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { mutate, data, isSuccess };
};
