import { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import classes from "./ToastMessage.module.css";

const Toast = ({ children, onClose }) => {
  return (
    <div className={classes.container}>
      <Card className={classes.errorContainer} onClick={onClose}>
        <div className={classes.message}>{children}</div>
      </Card>
    </div>
  );
};

const portalElement = document.getElementById("errorMessage");

const ToastMessage = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Toast onClose={onClose}>☹️ {children}</Toast>,
        portalElement
      )}
    </Fragment>
  );
};

export default ToastMessage;
