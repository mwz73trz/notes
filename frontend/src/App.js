import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import Modal from "./components/Modal";
import New from "./components/New";

function App() {
  const { showModal, showNew } = useGlobalContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Notes />
                {showModal && <Modal />}
                {showNew && <New />}
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
