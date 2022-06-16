import { useNavigate } from "react-router-dom";
import classes from "./ResetPasswordMessage.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const ResetPasswordMessage = ({ onClose }) => {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    navigate("/");
  };

  return (
    <Modal>
      <div className={classes.message}>
        <h3>Please check your email to reset your password</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button size="small" onClick={closeModalHandler}>OK</Button>
      </div>
    </Modal>
  );
};

export default ResetPasswordMessage;
