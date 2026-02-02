'use client';

import { useEffect, useState } from "react";
import { NoteFormModal } from "./NoteFormModal";
import { type Note, type Status, type Tag } from "../../types/note";
import { noteService } from "@/services/apiNotes";

interface NoteModalProps {
  allTags: Tag[]; // Los tags que vienen desde el servidor (Dashboard)
  editNote: Note | null; // La nota seleccionada para editar
  isModalOpen: boolean;
  onClose: () => void;
  onSuccess: () => void; // Para avisar al Dashboard que refresque los datos
}

export function NoteModal({ allTags, editNote, isModalOpen, onClose, onSuccess }: NoteModalProps) {
  // --- Estados del Formulario ---
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formStatus, setFormStatus] = useState<Status>("Pending");
  const [formTags, setFormTags] = useState<Tag[]>([]);

  // --- Sincronizar datos cuando cambia la nota a editar ---
  useEffect(() => {
    if (isModalOpen) {
    if (editNote) {
      setFormTitle(editNote.title);
      setFormContent(editNote.content);
      setFormStatus(editNote.status);
      const existingTags = allTags.filter(tag =>
      (editNote.tags || []).some((t: any) => t.id === tag.id || t === tag.id)
      );
      setFormTags(existingTags);
    } else {
      setFormTitle("");
      setFormContent("");
      setFormStatus("Pending");
      setFormTags([]);
    }
  }
  }, [editNote, isModalOpen]);

  // --- Lógica de Negocio ---
  const handleTagToggle = (tag: Tag) => {
    setFormTags((prev) => {
      const exists = prev.some((t) => t.id === tag.id);
      if (exists) {
        return prev.filter((t) => t.id !== tag.id);
      }
      return [...prev, tag];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const tagIds = formTags
    .filter(t => t !== null && t !== undefined)
    .map(t => t.id);

    const noteData = {
      userId: 1,
      title: formTitle,
      content: formContent,
      status: formStatus,
      tags: tagIds
    };

    try {
      if (editNote) {
        await noteService.update(editNote.id, noteData);
      } else {
        await noteService.create(noteData);
      }
      onSuccess(); // Refresca la lista
      onClose();   // Cierra el modal
    } catch (error) {
      console.error("Error al guardar la nota:", error);
    }
  };

  return (
    <NoteFormModal
      tags={allTags}
      isOpen={isModalOpen}
      editingNote={editNote}
      formTitle={formTitle}
      formContent={formContent}
      formStatus={formStatus}
      formTags={formTags}
      onTitleChange={setFormTitle}
      onContentChange={setFormContent}
      onStatusChange={setFormStatus}
      onTagToggle={handleTagToggle}
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
}