import { api } from "../../../lib/axios";
import type { Note, NotePayload, NoteUpdatePayload } from "../types/index";

export const noteService = {
  getAll: async () => {
    const { data } = await api.get<{ success: boolean; data: Note[] }>(
      "/notes"
    );
    return data.data;
  },

  getById: async (id: number) => {
    const { data } = await api.get<{ success: boolean; data: Note }>(
      `/notes/${id}`
    );
    return data.data;
  },

  create: async (payload: NotePayload) => {
    const { data } = await api.post<{ success: boolean; data: Note }>(
      "/notes",
      payload
    );
    return data.data;
  },

  update: async (id: number, payload: NoteUpdatePayload) => {
    const { data } = await api.put<{ success: boolean; data: Note }>(
      `/notes/${id}`,
      payload
    );
    return data.data;
  },

  remove: async (id: number) => {
    const { data } = await api.delete<{ success: boolean }>(`/notes/${id}`);
    return data.success;
  },
};
