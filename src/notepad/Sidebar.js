import React from "react";
import Note from "./Note";

export default function Sidebar({
  notes,
  addNote,
  deleteNote,
  activeNote,
  setActiveNote,
}) {

  return (
    <div className="basis-1/3 border-r-2 border-gray-900">
      <div className="notebar bg-zinc-800 flex justify-between">
        <h1 className="p-4 font-bold text-xl text-gray-300">Notepad</h1>
        <button
          onClick={addNote}
          className="text-blue-400 pr-4 transition duration-300 ease-out hover:text-blue-600
      hover:-translate-y-1.5"
        >
          add
        </button>
      </div>
      <div className="bg-zinc-700 h-screen	">
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          );
        })}
      </div>
    </div>
  );
}
