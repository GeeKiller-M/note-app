import type { Request, Response } from "express";
import * as tagService from "./tag.service";
import { catchAsync } from "../../utils/catchAsync";

export const create = catchAsync(async (req: Request, res: Response) => {
    const { name } = req.validated!.body;

    const newTag = await tagService.createTag({
      name,
    });

    res.status(201).json({ success: true, data: newTag });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
    const tag = await tagService.getAllTags();

    res.status(200).json({ success: true, data: tag });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    const tag = await tagService.getTagById(id);

    if (!tag) {
      return res.status(404).json({ success: false, error: "Tag not found" });
    }

    res.status(200).json({ success: true, data: tag });
});

export const update = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    const { name } = req.validated!.body;

    const updatedTag = await tagService.updateTag(id, {
      name,
    });

    res.status(200).json({ success: true, data: updatedTag });
});
