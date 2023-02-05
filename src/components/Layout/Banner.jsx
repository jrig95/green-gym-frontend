import classes from "./Banner.module.css";

const Banner = ({ title, isEditable = false, onChange }) => {
  return (
    <div className={classes.banner}>
      {isEditable ? (
        <label htmlFor="program_title">
          <input
            id="program_title"
            name="program_title"
            style={{
              all: "unset",
              fontSize: "3rem",
              color: "white",
              fontWeight: "bold",
            }}
            onChange={onChange}
            placeholder="Click to Enter Title"
            defaultValue={title}
          ></input>
        </label>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
};

export default Banner;
