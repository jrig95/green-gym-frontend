import FormCard from "./FormCard";
import classes from "./Form.module.css";

const AddProgramForm = () => {
  return (
    <FormCard title="Add Program">
      <form>
        <div className={classes.controlGroup}>
          <div classname={classes.formControl}>
            <lable>Program Name</lable>
            <input type="text"/>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default AddProgramForm;
