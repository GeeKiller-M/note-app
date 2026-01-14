export type NotesStatus = "Pending" | "Completed" | "InProgress";

export interface Tag {
  id: number;
  name: string;
}

export interface UserSummary {
  userName: string;
}

export interface Note {
  id: number;
  userId: number;
  title: string;
  content: string;
  status: NotesStatus;
  createdAt: string;
  updateAt: string;
  user: UserSummary;
  tags: Tag[];
}

export interface NotePayload {
  title: string;
  content: string;
  status: NotesStatus;
  tagIds: number[];
}

export interface NoteUpdatePayload {
  title?: string;
  content?: string;
  status?: NotesStatus;
  tagIds?: number[];
}
