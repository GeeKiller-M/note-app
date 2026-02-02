"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NotesList } from "./NotesList";
import { NoteModal } from "./NoteModal";
import { NotesSearchBar } from "./NotesSearchBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Note, Tag } from "../../types/note";

interface NotesContainerProps {
  initialNotes: Note[];
  allTags: Tag[];
}

export function NotesContainer({ initialNotes, allTags }: NotesContainerProps) {
  const router = useRouter();
  
  // --- ESTADOS GLOBALES DEL DASHBOARD ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // --- MANEJADORES DE EVENTOS ---
  
  // Función para abrir el modal en modo CREAR
  const handleCreateNew = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  // Función para abrir el modal en modo EDITAR (se la pasamos a la lista)
  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };

  const handleRefreshData = () => {
    // router.refresh le pide a Next.js que vuelva a ejecutar 
    // el Server Component (Dashboard) para traer datos nuevos.
    router.refresh(); 
  };

  return (
    <div className="space-y-6">
      <NotesSearchBar/>
      {/* 1. Encabezado con botón de acción */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-foreground">Tus Notas</h2>
        <Button onClick={handleCreateNew} className="gap-2">
          <Plus className="w-4 h-4" /> Nueva Nota
        </Button>
      </div>

      {/* 2. La Lista de Notas */}
      {/* Le pasamos las notas y la función de editar */}
      <NotesList 
        notes={initialNotes} 
        onEdit={handleEdit} 
      />

      {/* 3. El Modal Orquestador */}
      <NoteModal 
        allTags={allTags}
        editNote={editingNote}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={handleRefreshData}
      />
    </div>
  );
}