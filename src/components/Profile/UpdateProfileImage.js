import UpdateProfileImageForm from "./UpdateProfileImageForm";
import classes from "./UpdateProfileImage.module.css";
import Modal from "../UI/Modal";

const UpdateProfileImage = ({ onClose }) => {
  return (
    <Modal>
      <UpdateProfileImageForm onClose={onClose}/>
    </Modal>
  );
};

export default UpdateProfileImage;
