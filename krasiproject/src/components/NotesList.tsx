import { useNotes } from "../hooks/useNotes";
import "../styles/forms.css";

export default function NotesList() {
  const { notes, deleteNote, refreshNotes } = useNotes();

  return (
    <div className="notes-wrapper">
      <button className="refresh-btn" onClick={refreshNotes}>
        Refresh Notes
      </button>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.title}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



/*
export default function NotesList() {
  const { notes, deleteNote, refreshNotes } = useNotes();

  return (
    <div>
      <button onClick={refreshNotes}>Refresh Notes</button>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.title}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/