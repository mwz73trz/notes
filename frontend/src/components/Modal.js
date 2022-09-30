import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedNote, closeModal } = useGlobalContext();
  const { title, content, created, updated } = selectedNote;

  return (
    <aside>
      <div>
        <div>
          <h4>{title}</h4>
          <h5>{content}</h5>
          <p>Created: {created}</p>
          <p>Last Updated: {updated}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
