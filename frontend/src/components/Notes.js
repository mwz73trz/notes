import { useGlobalContext } from "../context";

const Notes = () => {
  const { loading, notes, selectNote } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {notes.map((singleNote) => {
        const { id, title, content, created, updated } = singleNote;

        return (
          <article key={id} className="single-note">
            <footer>
              <h1 onClick={() => selectNote(id)}>{title}</h1>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Notes;
