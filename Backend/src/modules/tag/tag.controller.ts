import type { Request, Response } from "express";
import * as tagService from "./tag.service";

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newTag = await tagService.createTag({
      name,
    });

    res.status(201).json({ success: true, data: newTag });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const tag = await tagService.getAllTags();
    res.status(200).json({ success: true, data: tag });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const tag = await tagService.getTagById(id);

    if (!tag) {
      return res.status(404).json({ success: false, error: "Tag not found" });
    }

    res.status(200).json({ success: true, data: tag });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;

    const updatedTag = await tagService.updateTag(id, {
      name,
    });

    res.status(200).json({ success: true, data: updatedTag });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
