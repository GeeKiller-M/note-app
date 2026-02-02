import type { Request, Response } from "express";
import * as notesService from "./note.service";
import { catchAsync } from "../../utils/catchAsync";

export const create = catchAsync(async (req: Request, res: Response) => {
    const { userId, title, content, status, tags } = req.validated!.body;

    const newNote = await notesService.createNote({
      userId,
      title,
      content,
      status,
      tags: {
        connect: tags??[]
          .filter((tagId: number | null) => tagId != null)
          .map((tagId: number) => ({ id: tagId })),
      },
    });

    res.status(201).json({ success: true, data: newNote });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
    const filters = req.validated?.query;

    const result = await notesService.getAllNotes(filters);

    res.status(200).json({ success: true, data: result });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    const note = await notesService.getNoteById(id);

    res.status(200).json({ success: true, data: note });
});

export const update = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    const { title, content, status, tags } = req.validated!.body;

    const updatedNote = await notesService.updateNote(id, {
      title,
      content,
      status,
      tags: {
        set: tags??[]
          .filter((tagId: number | null) => tagId != null)
          .map((tagId: number) => ({ id: tagId })),
      },
    });

    res.status(200).json({ success: true, data: updatedNote });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    await notesService.deleteNote(id);
    res
      .status(200)
      .json({ success: true, message: "Note deleted successfully" });

});
