import Modal from "../../UI/Modal";
import UpdateLibraryItemForm from "../../Forms/UpdateLibraryItemForm";

const UpdateLibraryItem = ({ libraryItem, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <UpdateLibraryItemForm onClose={onClose} libraryItem={libraryItem}/>
    </Modal>
  );
};

export default UpdateLibraryItem;
