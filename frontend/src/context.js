import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allNotesUrl = "http://localhost:8000/api/notes/";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchNotes = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data) {
        setNotes(data);
      } else {
        setNotes([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const selectNote = (id) => {
    let note;
    note = notes.find((note) => note.id === id);
    setSelectedNote(note);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchNotes(allNotesUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        notes,
        showModal,
        closeModal,
        selectNote,
        selectedNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
