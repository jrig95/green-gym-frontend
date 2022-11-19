import classes from "./LoadingSpinnerLarge.module.css";

const LoadingSpinnerLarge = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loadingSpinner} />
    </div>
  );
};

export default LoadingSpinnerLarge;
