import { NoteList } from '../features/notes/components/NoteList';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-black text-white">Mis Notas</h1>
        <p className="text-slate-400">Gestiona tus tareas y etiquetas</p>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Aquí es donde vive tu lógica de notas */}
        <NoteList />
      </main>
    </div>
  );
};