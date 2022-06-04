import { selectIsValid } from "../../../utils/input-from-validations";
import useInput from "../../Forms/Hooks/use-input";
import LoadingSpinnerLarge from "../../UI/LoadingSpinnerLarge";
import { usePrograms } from "../../Program/hooks/use-programs";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import classes from "./AddUserToProgram.module.css";
import { Fragment } from "react";

const AddUserToProgram = ({ onClose, getProgramId }) => {
  const { data: programsData, isLoading: porgramsIsLoading } = usePrograms();

  const { value: programValue, valueChangeHandler: programChangeHandler } =
    useInput(selectIsValid);

  // const programList = porgramsData.map((program) =)

  const addUserToProgramHandler = () => {
    getProgramId(programValue);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      {porgramsIsLoading ? (
        <LoadingSpinnerLarge />
      ) : (
        <Fragment>
          <div className={classes.textContainer}>
            <h2>Select Program</h2>
          </div>
          <div className={classes.formContainer}>
            <form>
              <label htmlFor="program">Program</label>
              <select id="program" value={programValue} onChange={programChangeHandler}>
                <option>Select...</option>
                {programsData.map((program) => {
                  return (
                    <option key={program.id} value={program.id}>
                      {program.program_title}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
          <div className={classes.buttonContainer}>
            <Button size="small" color="blue" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" onClick={addUserToProgramHandler}>
              Confrim
            </Button>
          </div>
        </Fragment>
      )}
    </Modal>
  );
};

export default AddUserToProgram;
