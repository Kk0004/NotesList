import { useAuth } from "../hooks/useAuth";
import NoteForm from "../components/NoteForm";
import NotesList from "../components/NotesList";
import { Navigate } from "react-router-dom";

export default function NotesPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <center>
      <h2>My Notes</h2>
      </center>
      <NoteForm />
      <NotesList />
    </div>
  );
}
