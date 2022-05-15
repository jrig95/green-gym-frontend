import Modal from "../../UI/Modal";
import AddLibraryItemForm from "../../Forms/AddLibraryItemForm";

const AddLibraryItem = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <AddLibraryItemForm onClose={onClose} />
    </Modal>
  );
};

export default AddLibraryItem;
