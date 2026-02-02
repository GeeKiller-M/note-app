"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, CheckCircle2, Circle } from "lucide-react";
import { type Note, type Status, type Tag } from "../../types/note";

interface NoteFormModalProps {
  tags: Tag[];
  isOpen: boolean;
  editingNote: Note | null;
  formTitle: string;
  formContent: string;
  formStatus: Status;
  formTags: Tag[];
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onStatusChange: (value: Status) => void;
  onTagToggle: (tag: Tag) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export function NoteFormModal({
  tags,
  isOpen,
  editingNote,
  formTitle,
  formContent,
  formStatus,
  formTags,
  onTitleChange,
  onContentChange,
  onStatusChange,
  onTagToggle,
  onSubmit,
  onClose,
}: NoteFormModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{editingNote ? "Edit Note" : "Create Note"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter note title"
              value={formTitle}
              onChange={(e) => onTitleChange(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Enter note content"
              value={formContent}
              onChange={(e) => onContentChange(e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formStatus} onValueChange={onStatusChange}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">
                    <div className="flex items-center gap-2">
                      <Circle className="w-3 h-3" />
                      Pending
                    </div>
                  </SelectItem>
                  <SelectItem value="InProgress">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </div>
                  </SelectItem>
                  <SelectItem value="Completed">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => onTagToggle(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-all ${
                      formTags.some((t) => t.id === tag.id)
                        ? "bg-primary text-primary-foreground shadow-sm" // Estilo seleccionado
                        : "bg-secondary text-secondary-foreground hover:bg-muted" // Estilo normal
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {editingNote ? "Save Changes" : "Create Note"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
