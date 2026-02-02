import { Router } from "express";
import { validate } from "../../middleware/validate";
import { createTagSchema, updateTagSchema } from "./tag.dto";
import * as tagController from "./tag.controller";

const router = Router();

router.post("/", validate(createTagSchema), tagController.create);
router.get("/", tagController.getAll);
router.get("/:id", tagController.getById);
router.put("/:id", validate(updateTagSchema), tagController.update);

export default router;
