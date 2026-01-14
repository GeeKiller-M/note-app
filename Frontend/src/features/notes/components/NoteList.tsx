import { useNotes } from '../hooks/useNotes';

export const NoteList = () => {
  const { notes, loading, error } = useNotes();

  if (loading) return <p className="text-white text-center">Cargando notas...</p>;
  if (error) return <p className="text-red-400 text-center">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <div key={note.id} className="bg-slate-800 border border-slate-700 p-5 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-sky-400 leading-tight">{note.title}</h3>
              <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${
                note.status === 'Completed' ? 'bg-green-900 text-green-300' : 
                note.status === 'InProgress' ? 'bg-yellow-900 text-yellow-300' : 'bg-slate-700 text-slate-300'
              }`}>
                {note.status}
              </span>
            </div>
            
            <p className="text-slate-300 text-sm line-clamp-3 mb-4">{note.content}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {note.tags.map((tag) => (
                <span key={tag.id} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-md">
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700 flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>👤 {note.user.userName}</span>
            <span>📅 {new Date(note.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};