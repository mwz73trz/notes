import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const New = () => {
  const navigate = useNavigate();
  const { createNote, cancelNew } = useGlobalContext();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const noteData = {
      title: evt.target.elements["title"].value,
      content: evt.target.elements["content"].value,
    };

    const data = await createNote(noteData);
    console.log("DATA: ", data);
    if (data) {
      window.location.reload(false);
    }
  };

  return (
    <aside className="new-overlay">
      <div className="new-continer">
        <div className="new=content">
          <Form
            onSubmit={handleFormSubmit}
            style={{ width: "30%", marginLeft: "35%" }}
          >
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control type="text" placeholder="Content" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Note
            </Button>
            <Button variant="danger" onClick={cancelNew}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </aside>
  );
};

export default New;
