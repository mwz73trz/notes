import "./App.css";
import { useGlobalContext } from "./context";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import Modal from "./components/Modal";

function App() {
  const { showModal } = useGlobalContext();

  return (
    <div className="App">
      <main>
        <NavBar />
        <Notes />
        {showModal && <Modal />}
      </main>
    </div>
  );
}

export default App;
