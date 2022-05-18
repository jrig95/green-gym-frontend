import { Fragment, useEffect } from "react";

import ToastMessage from "./ToastMessage";
import useAPIError from "../../common/hooks/use-API-error";

const APIErrorNotification = () => {
  const { error, removeError } = useAPIError();

  const removeErrorHandler = () => {
    removeError();
  };

  useEffect(() => {
    console.log("inside useEffect");
    if (error) {
      const wait = setTimeout(() => {
        console.log("inside Set timeout");
        removeError();
      }, 3000);

      return clearTimeout(wait);
    }
  }, [error]);

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
