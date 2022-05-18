import { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import classes from "./APIErrorNotification.module.css";

const Toast = ({ children, onClose, show }) => {
  
  return (
    <Card className={classes.errorContainer} onClick={onClose}>
      {children}
    </Card>
  );
};

const portalElement = document.getElementById("errorMessage");

const ToastMessage = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Toast onClose={onClose}>{children}</Toast>, portalElement)}
    </Fragment>
  );
};

export default ToastMessage;
