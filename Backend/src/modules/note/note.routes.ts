import { Router } from "express";
import { validate } from "../../middleware/validate";
import { createNoteSchema, updateNoteSchema, noteQuerySchema, noteParamsSchema } from "./note.dto";
import * as notesController from "./note.controller";

const router = Router();

router.post(
    "/",
    validate(createNoteSchema),
    notesController.create
);

router.get(
    "/",
    validate(noteQuerySchema, "query"),
    notesController.getAll
);

router.get(
    "/:id",
    validate(noteParamsSchema, "params"),
    notesController.getById
);

router.put(
    "/:id",
    validate(noteParamsSchema, "params"),
    validate(updateNoteSchema),
    notesController.update
);
router.delete(
    "/:id",
    validate(noteParamsSchema, "params"),
    notesController.remove
);

export default router;
