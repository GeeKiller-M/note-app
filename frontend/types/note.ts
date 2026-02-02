export type Status = "Pending" | "InProgress" | "Completed"

export interface Tag {
  id: number
  name: string
}

export interface Note {
  id: number
  title: string
  content: string
  status: Status
  tags: Tag[]
  createdAt: Date
}

export interface NoteFilters {
  userId?: number
  status?: string
  tag?: string
  search?: string
  page?: number
  limit?: number
}