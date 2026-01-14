import { Router } from "express";
import * as notesController from "./note.controller";

const router = Router();

router.post("/", notesController.create);
router.get("/", notesController.getAll);
router.get("/:id", notesController.getById);
router.put("/:id", notesController.update);
router.delete("/:id", notesController.remove);

export default router;
