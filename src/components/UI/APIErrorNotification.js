import { Fragment } from "react";
import ReactDOM from "react-dom";

import ToastMessage from "./ToastMessage";
import useAPIError from "../../common/hooks/use-API-error";

const APIErrorNotification = () => {
  const { error, removeError } = useAPIError();

  const removeErrorHandler = () => {
    removeError();
  };

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
