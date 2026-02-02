// DashboardNotes.tsx
import { noteService, tagService } from "@/services/apiNotes";
import { NotesContainer } from "./NoteContainer";
import { Status, NoteFilters } from "@/types/note";

interface DashboardNotesProps {
  // Aquí ya es el objeto resuelto que viene de la página
  searchParams: Partial<NoteFilters>;
}

export async function NotesDashboard({ searchParams }: DashboardNotesProps) {
  // Ahora searchParams.search ya es accesible de forma segura
  const notesResponse = await noteService.getAll({
    search: searchParams.search,
    page: searchParams.page,
    status: searchParams.status as Status,
    userId: 1,
  });

  const tags = await tagService.getAll();

  const notesList = Array.isArray(notesResponse)
    ? notesResponse
    : notesResponse?.data || [];
    
  const tagsList = Array.isArray(tags) ? tags : tags?.data || [];

  return (
    <div className="p-6">
      <NotesContainer initialNotes={notesList} allTags={tagsList} />
    </div>
  );
}