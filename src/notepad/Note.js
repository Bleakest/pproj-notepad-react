import React from "react";

function Note({ note, deleteNote, activeNote, setActiveNote }) {
  return (
    <div
      className={`bg-zinc-700 p-6 flex justify-between hover:bg-orange-200 ${
        note.id === activeNote && "active"
      }`}
      onClick={() => setActiveNote(note.id)}
    >
      <div>
        <h1 className="font-semibold text-xl text-white">{note.title}</h1>
        <div className="text-white font-thin">{note.body}</div>
        <div className="font-light p-2 text-white">Last modified: {note.lastModified}</div>
      </div>
      <button
        className="text-red-500 transition duration-300 ease-out hover:text-red-300
          hover:-translate-y-1.5"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
