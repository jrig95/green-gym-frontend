import classes from "./Sort.module.css";

const Sort = () => {
  return (
    <div className={classes.container}>
      <form>
        <label>Sort By</label>
        <select>
          <option>Select...</option>
          <option>Program</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
