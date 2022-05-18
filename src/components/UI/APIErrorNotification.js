import classes from "./APIErrorNotification.module.css";
import useAPIError from "../../common/hooks/use-API-error";

const APIErrorNotification = () => {
  const { error, removeError } = useAPIError();

  const removeErrorHandler = () => {
    removeError();
  };



  return <div className={classes.errorContainer} onClick={removeErrorHandler}>This is an error</div>;
};

export default APIErrorNotification;
