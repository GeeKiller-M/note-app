"use client"

import React from "react"
import { MoreVertical, Pencil, Trash2, Clock, CheckCircle2, Circle } from "lucide-react"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Types
import { type Note, type Status } from '../../types/note';

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: number) => void
}

// 1. Definimos un objeto de configuración completo para los estados
const statusConfig: Record<Status, { icon: React.ReactNode; label: string; className: string }> = {
  Pending: { 
    icon: <Circle className="w-3 h-3" />, 
    label: "Pendiente", 
    className: "bg-slate-100 text-slate-600 border-slate-200" 
  },
  InProgress: { 
    icon: <Clock className="w-3 h-3" />, 
    label: "En Progreso", 
    className: "bg-blue-100 text-blue-600 border-blue-200" 
  },
  Completed: { 
    icon: <CheckCircle2 className="w-3 h-3" />, 
    label: "Hecho", 
    className: "bg-green-100 text-green-600 border-green-200" 
  },
}

export function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  // Obtenemos la config del estado actual de la nota
  const status = statusConfig[note.status];

  return (
    <Card className="border-border hover:border-muted-foreground/30 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium text-foreground truncate">{note.title}</h3>
              
              {/* Badge de Estado dinámico */}
              <Badge
                variant="outline"
                className={`${status.className} shrink-0 flex items-center gap-1 font-normal`}
              >
                {status.icon}
                {status.label}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {note.content}
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Mapeo de Tags (asumiendo que tag es un string o tiene propiedad name) */}
              {note.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-[10px] px-1.5 py-0 h-5 capitalize bg-secondary/50"
                >
                  {typeof tag === 'string' ? tag : (tag as { name: string }).name}
                </Badge>
              ))}
              
              <span className="text-xs text-muted-foreground ml-auto">
                {/* Convertimos a fecha por si viene como string de la API */}
                {new Date(note.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                <MoreVertical className="w-4 h-4" />
                <span className="sr-only">Acciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(note)}>
                <Pencil className="w-4 h-4 mr-2" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(note.id)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  )
}