import React from "react";

export default function NoteEditor({ activeNote, updateNote }) {
  const onEditField = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: new Date().toLocaleTimeString(),
    });
  };

  if (!activeNote) {
    return (
      <div className="p-4 bg-zinc-700 text-2xl text-gray-500 basis-3/4 flex items-center justify-center">
        Pick a note
      </div>
    );
  }
  return (
    <>
      <div className="basis-3/4 flex flex-col bg-zinc-700">
        <div className="text-center p-4 text-neutral-400">
          {activeNote.lastModified}
        </div>
        <input
          value={activeNote.title}
          className="text-center m-4 p-2 bg-zinc-600 focus:outline-none text-white" 
          placeholder="Write title.."
          onChange={(e) => onEditField("title", e.target.value)}
        />
        <input
          value={activeNote.body}
          className="py-36 px-6 m-4 bg-zinc-600 focus:outline-none text-white"
          placeholder="Write some text.."
          onChange={(e) => onEditField("body", e.target.value)}
        />

        <div className="p-6 border-t-2 border-gray-900 ">
          <h1 className="text-3xl text-white	">{activeNote.title}</h1>
          <div className="text-white font-thin">{activeNote.body}</div>
        </div>
      </div>
    </>
  );
}
