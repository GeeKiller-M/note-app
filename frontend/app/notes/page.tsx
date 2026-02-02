// app/notes/page.tsx
import { NotesDashboard } from '../../components/notes/DashboardNotes';
import { NoteFilters } from '@/types/note';

interface NotesPageProps {
    // Definimos searchParams como una Promesa
    searchParams: Promise<Partial<NoteFilters>>;
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
    // IMPORTANTE: Esperamos a que la promesa se resuelva
    const filters = await searchParams; 
    
    // Ahora pasamos el objeto ya resuelto
    return <NotesDashboard searchParams={filters} />;
}