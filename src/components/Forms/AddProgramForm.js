import FormCard from "./FormCard";
import classes from "./Form.module.css";
import Button from "../UI/Button";

const AddProgramForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <FormCard title="Add Program">
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="program_name">Program Name</label>
            <input type="text" id="program_name" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="number_of_days">Number Of Days</label>
            <input type="number" id="number_of_days" min={0} />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="cover_image">Cover Image</label>
            <input type="text" id="cover_image" />
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small">
              Cancel
            </Button>
            <Button size="small" type="submit">
              Add
            </Button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default AddProgramForm;
