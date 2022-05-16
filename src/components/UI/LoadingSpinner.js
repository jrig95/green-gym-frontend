import { useIsFetching } from "react-query";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  const isFetching = useIsFetching();

  const display = isFetching ? "inherit" : "none";

  return (
    <div className={classes.container} style={{ display: display }}>
      <div className={classes.loadingSpinner} />
    </div>
  );
};

export default LoadingSpinner;
