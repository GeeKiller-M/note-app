import { Router } from "express";
import * as userController from "./user.controller";

const router = Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

export default router;
