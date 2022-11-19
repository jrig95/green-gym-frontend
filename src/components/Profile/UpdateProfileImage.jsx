import UpdateProfileImageForm from "./UpdateProfileImageForm";
import Modal from "../UI/Modal";

const UpdateProfileImage = ({ onClose }) => {
  return (
    <Modal>
      <UpdateProfileImageForm onClose={onClose}/>
    </Modal>
  );
};

export default UpdateProfileImage;
