import { Fragment, useEffect } from "react";

import ToastMessage from "./ToastMessage";
import useAPIError from "../../common/hooks/use-API-error";

const APIErrorNotification = () => {
  const { error, removeError } = useAPIError();

  const removeErrorHandler = () => {
    removeError();
  };

  useEffect(() => {
    if (error) {
      const wait = setTimeout(() => {
        removeError();
      }, 5000);

      return () => clearTimeout(wait);
    }
  }, [error, removeError]);

  return (
    <Fragment>
      {error && (
        <ToastMessage onClose={removeErrorHandler}>
          {error && error.message}
        </ToastMessage>
      )}
    </Fragment>
  );
};

export default APIErrorNotification;
