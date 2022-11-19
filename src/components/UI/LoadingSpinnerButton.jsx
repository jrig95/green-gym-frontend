import { useIsFetching, useIsMutating } from "react-query";
import classes from "./LoadingSpinnerButton.module.css";

const LoadingSpinnerButton = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  
  const display = isFetching || isMutating ? "inherite" : "none";

  return (
    <div className={classes.container} style={{ display: display }}>
      <div className={classes.loadingSpinner}/>
    </div>
  )
};

export default LoadingSpinnerButton;