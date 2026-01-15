import type { NoteFilters } from "./note.service";

export const parseNotesQuery = (query: any): NoteFilters => {
  if (!query.userId) {
    throw new Error("userId is required");
  }

  return {
    userId: Number(query.userId),
    status: query.status,
    tagName: query.tag,
    search: query.search,
    page: query.page ? Number(query.page) : undefined,
    limit: query.limit ? Number(query.limit) : undefined,
  };
};
