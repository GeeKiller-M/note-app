import { z } from 'zod';

export const createTagSchema = z.object({
    name: z.string().min(1),
});

export const updateTagSchema = z.object ({
    name: z.string().min(1).optional(),
});
