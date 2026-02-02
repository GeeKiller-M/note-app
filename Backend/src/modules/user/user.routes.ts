import { Router } from "express";
import { validate } from "../../middleware/validate";
import { createUserSchema, updateUserSchema, userParamsSchema } from "./user.dto";
import * as userController from "./user.controller";

const router = Router();

router.post("/", validate(createUserSchema), userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", validate(updateUserSchema), userController.update);
router.delete("/:id", validate(userParamsSchema, "params"), userController.remove);

export default router;
