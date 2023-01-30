import classes from "./Banner.module.css";

const Banner = ({ title, isEditable = false, onChange }) => {
  return (
    <div className={classes.banner}>
      <h1 contentEditable={isEditable} onChange={onChange}>{title}</h1>
    </div>
  );
};

export default Banner;
