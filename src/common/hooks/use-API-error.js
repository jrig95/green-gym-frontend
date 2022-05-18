import React, { useContext } from "react";
import { APIErrorContext } from "../../context/APIErrorProvider";

const useAPIError = () => {
  const { error, addError, removeError } = useContext(APIErrorContext);

  return { error, addError, removeError };
};

export default useAPIError;