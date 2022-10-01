import { useGlobalContext } from "../context";
import Button from "react-bootstrap/Button";

const Modal = () => {
  const { selectedNote, closeModal } = useGlobalContext();
  const { title, content, created, updated } = selectedNote;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h4>{title}</h4>
          <h5>{content}</h5>
          <p>Created: {created}</p>
          <p>Last Updated: {updated}</p>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
