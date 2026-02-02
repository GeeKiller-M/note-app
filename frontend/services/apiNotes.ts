import { apiFetch } from "./apiClient";
import { Status, NoteFilters} from "../types/note";

export const tagService = {
    getAll: () => apiFetch("/tags", { method: "GET" }),
}

export const noteService = {
  getAll: (filters: NoteFilters = {}) => {
    const params = new URLSearchParams();
    params.append('userId', (filters.userId || 1).toString());
    if (filters.status) params.append('status', filters.status);
    if (filters.tag) params.append('tag', filters.tag);
    if (filters.search) params.append('search', filters.search);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    return apiFetch(`/notes?${params.toString()}`);
  },
  getById: (id: number) => apiFetch(`/notes/${id}`, { method: "GET" }),
  create: (noteData: {
    title: string;
    content: string;
    status: Status;
    tags: number[];
    createdAt?: string;
  }) =>
    apiFetch(`/notes`, {
      method: "POST",
      body: JSON.stringify(noteData),
    }),
  update: (
    id: number,
    noteData: {
      title?: string;
      content?: string;
      status?: Status;
      tags?: number[];
    },
  ) =>
    apiFetch(`/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(noteData),
    }),
  delete: (id: number) => apiFetch(`/notes/${id}`, { method: "DELETE" }),
};
