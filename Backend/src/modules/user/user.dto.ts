import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(1),
    lastName: z.string().min(1),
    userName: z.string().min(1),
    password: z.string().min(18),
});

export const updateUserSchema = z.object ({
    name: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    userName: z.string().min(1).optional(),
    password: z.string().min(18).optional(),
});

export const userParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
});