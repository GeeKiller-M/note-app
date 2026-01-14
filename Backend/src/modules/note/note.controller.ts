import type { Request, Response } from "express";
import * as notesService from "./note.service";

export const create = async (req: Request, res: Response) => {
  try {
    const { userId, title, content, status, tags } = req.body;

    const newNote = await notesService.createNote({
      userId,
      title,
      content,
      status,
      tags: {
        connect: tags.map((tagId: number) => ({ id: tagId })),
      },
    });

    res.status(201).json({ success: true, data: newNote });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const notes = await notesService.getAllNotes();
    res.status(200).json({ success: true, data: notes });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const note = await notesService.getNoteById(id);
    res.status(200).json({ success: true, data: note });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, content, status, tags } = req.body;

    const updatedNote = await notesService.updateNote(id, {
      title,
      content,
      status,
      tags: {
        set: tags.map((tagId: number) => ({ id: tagId })),
      },
    });

    res.status(200).json({ success: true, data: updatedNote });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await notesService.deleteNote(id);
    res
      .status(200)
      .json({ success: true, message: "Note deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
