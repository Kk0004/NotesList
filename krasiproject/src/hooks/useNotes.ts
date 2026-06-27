import { useState, useEffect } from "react";
import { api } from "../services/jsonServer";
import { useAuth } from "./useAuth";

export const useNotes = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState<any[]>([]);

  const loadNotes = async () => {
    if (!user) return;
    const res = await api.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    loadNotes();
  }, [user]);

  const addNote = async (note: any) => {
    if (!user) return;
    const res = await api.post("/notes", note);
    setNotes([...notes, res.data]);
  };

  const deleteNote = async (id: number) => {
    if (!user) return;
    await api.delete(`/notes/${id}`);
    setNotes(notes.filter(n => n.id !== id));
  };

  return { notes, addNote, deleteNote, refreshNotes: loadNotes };
};
