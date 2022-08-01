import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const sendOtpCode = async (phoneNumber) => {
  await axios.patch(`${baseUrl}/send_otp_code`, phoneNumber)
}

export const useSendOtpCode = () => {
  const { addError } = useAPIError();
  
  const { mutate } = useMutation((phoneNumber) => sendOtpCode(phoneNumber), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return mutate;
}
