import React, { useEffect, useState } from "react";
import NoteEditor from "./notepad/NoteEditor";
import Sidebar from "./notepad/Sidebar";

function App() {
  const [notes, setNotes] = useState(
  localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes',  JSON.stringify(notes))
  }, [notes]) 

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      body: "",
      lastModified: new Date().toLocaleTimeString(),
    };

    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const updateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note
    });

    setNotes(updatedNotesArray)
  };

  return (
    <div className="flex">
      <Sidebar
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NoteEditor activeNote={getActiveNote()} updateNote={updateNote} />
    </div>
  );
}

export default App;
