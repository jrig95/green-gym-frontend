import classes from "./Banner.module.css";

const Banner = ({ title }) => {
  return (
    <div className={classes.banner}>
      <h1>{title || "Banner"}</h1>
    </div>
  );
};

export default Banner;
