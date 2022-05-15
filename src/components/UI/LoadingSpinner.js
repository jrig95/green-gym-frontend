import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loadingSpinner} />
    </div>
  );
};

export default LoadingSpinner;
