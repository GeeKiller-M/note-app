"use client";

import { useRouter } from "next/navigation"; // Importa el router de Next
import { NoteCard } from "./NoteCard";
import { Note } from "@/types/note";
import { noteService } from "@/services/apiNotes";

interface NotesListProps {
  notes: Note[];
  onEdit: (note: Note) => void;
}

export function NotesList({ notes, onEdit }: NotesListProps) {
  const router = useRouter(); // Inicializa el router

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de eliminar esta nota?")) {
      try {
        await noteService.delete(id);
        // router.refresh() le dice a Next.js que re-ejecute los Server Components
        // Esto actualizará la lista sin perder el estado del cliente
        router.refresh(); 
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard 
            key={note.id} 
            note={note} 
            onEdit={onEdit} 
            onDelete={handleDelete} 
          />
        ))
      ) : (
        <p className="text-muted-foreground col-span-full text-center py-10">
          No se encontraron notas con esos filtros.
        </p>
      )}
    </div>
  );
}