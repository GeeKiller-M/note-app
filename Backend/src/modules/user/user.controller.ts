import type { Request, Response } from "express";
import * as userService from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { validate } from '../../middleware/validate';

export const create = catchAsync(async (req: Request, res: Response) => {
    const { name, lastName, userName, password } = req.validated!.body;

    const newUser = await userService.createUser({
      name,
      lastName,
      userName,
      password,
    });

    res.status(201).json({ success: true, data: newUser });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
    const users = await userService.getAllUsers();
    res.status(200).json({ success: true, data: users });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
});

export const update = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated?.params.id);
    const { name, lastName, userName, password } = req.validated!.body;

    const updatedUser = await userService.updateUser(id, {
      name,
      lastName,
      userName,
      password,
    });

    res.status(200).json({ success: true, data: updatedUser });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
    const id = Number(req.validated!.params.id);
    await userService.deleteUser(id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
});
