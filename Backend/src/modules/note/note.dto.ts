import { z } from 'zod';

export const createNoteSchema = z.object({
    userId: z.number().int().positive(), // Hasta la implementación de auth.
    title: z.string().min(1),
    content: z.string().min(1),
    status: z.enum(['Pending', 'InProgress', 'Completed']).default('Pending'),
    tags: z.array(z.number()).optional(),
});

export const updateNoteSchema = z.object ({
    title: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    status: z.enum(['Pending', 'InProgress', 'Completed']).optional(),
    tags: z.array(z.number()).optional(),
});

export const noteQuerySchema = z.object({
    userId: z.coerce.number().int().positive(), // Hasta la implementación de auth.
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
    search: z.string().optional(),
    status: z.enum(['Pending', 'InProgress', 'Completed']).optional(),
    tag: z.string().optional(),
});

export const noteParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
})
