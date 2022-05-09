import Button from "../UI/Button";
import classes from "./Form.module.css";

const AddRewardForm = ({ onClose }) => {
  const addRewardHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className={classes.title}>Add Reward</h1>
      <form onSubmit={addRewardHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="title">Reward Name</label>
            <input type="text" id="title" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="image">Cover Image</label>
            <input type="text" id="image" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="points">Points</label>
            <input type="number" id="points" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="points">Program (optional)</label>
            <select id="program">
              <option>1</option>
            </select>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRewardForm;
