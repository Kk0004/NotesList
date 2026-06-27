import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import "../styles/forms.css";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New note"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
