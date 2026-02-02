import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({

  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3001),
  CORS_ORIGIN: z.url().default("http://localhost:3000"),


  DATABASE_HOST: z.string().min(1),
  DATABASE_USER: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_PORT: z.coerce.number().default(3306),
  DATABASE_NAME: z.string().min(1),
})

export const env = envSchema.parse(process.env);