import { useNavigate } from "react-router-dom";
import classes from "./ResetPasswordMessage.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const SuccessfullyResetPasswordMessage = ({ onClose }) => {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    navigate("/");
  };

  return (
    <Modal>
      <div className={classes.message}>
        <h3>You have successfully reset your password.</h3>
        <h3>Please sign in with your new password.</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" onClick={closeModalHandler}>
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessfullyResetPasswordMessage;
