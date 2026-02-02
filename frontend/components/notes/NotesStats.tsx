"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Note } from "../../types/note"

interface NotesStatsProps {
  notes: Note[]
}

export function NotesStats({ notes }: NotesStatsProps) {
  const pendingCount = notes.filter((n) => n.status === "pending").length
  const inProgressCount = notes.filter((n) => n.status === "in-progress").length
  const completedCount = notes.filter((n) => n.status === "completed").length

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      <Card className="border-border">
        <CardContent className="py-4 text-center">
          <p className="text-2xl font-semibold text-foreground">{pendingCount}</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </CardContent>
      </Card>
      <Card className="border-border">
        <CardContent className="py-4 text-center">
          <p className="text-2xl font-semibold text-foreground">{inProgressCount}</p>
          <p className="text-xs text-muted-foreground">In Progress</p>
        </CardContent>
      </Card>
      <Card className="border-border">
        <CardContent className="py-4 text-center">
          <p className="text-2xl font-semibold text-foreground">{completedCount}</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </CardContent>
      </Card>
    </div>
  )
}
