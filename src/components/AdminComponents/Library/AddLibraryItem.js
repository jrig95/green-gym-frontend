import Modal from "../../UI/Modal";
import AddLibraryItemForm from "../../Forms/AddLibraryItemForm";

const AddLibraryItem = ({ onClose }) => {
  return (
    <Modal>
      <AddLibraryItemForm onClose={onClose} />
    </Modal>
  );
};

export default AddLibraryItem;
