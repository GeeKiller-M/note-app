import { useState, useEffect, useCallback } from "react";
import { noteService } from "../services/note.service";
import type { Note, NotePayload, NoteUpdatePayload } from "../types/index";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await noteService.getAll();
      setNotes(data);
      setError(null);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createNote = async (note: NotePayload) => {
    try {
      await noteService.create(note);
      fetchNotes();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const updateNote = async (id: number, note: NoteUpdatePayload) => {
    try {
      await noteService.update(id, note);
      fetchNotes();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await noteService.remove(id);
      fetchNotes();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return {
    notes,
    loading,
    error,
    refetch: fetchNotes,
    createNote,
    updateNote,
    deleteNote,
  };
};
