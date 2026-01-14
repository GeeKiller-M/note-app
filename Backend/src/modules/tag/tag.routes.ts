import { Router } from "express";
import * as tagController from "./tag.controller";

const router = Router();

router.post("/", tagController.create);
router.get("/", tagController.getAll);
router.get("/:id", tagController.getById);
router.put("/:id", tagController.update);

export default router;
