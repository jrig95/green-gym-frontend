import { useIsFetching, useIsMutating } from "react-query";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  // const display = isFetching || isMutating ? "inherit" : "none";

  const display = isFetching || isMutating ? "inherit" : "inherit";

  return (
    <div className={classes.container} style={{ display: display }}>
      <div className={classes.loadingSpinner} />
    </div>
  );
};

export default LoadingSpinner;
