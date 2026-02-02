"use client"

import { StickyNote } from "lucide-react"

export function NotesHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <StickyNote className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Notes</h1>
            <p className="text-sm text-muted-foreground">Manage your notes and tasks</p>
          </div>
        </div>
      </div>
    </header>
  )
}
