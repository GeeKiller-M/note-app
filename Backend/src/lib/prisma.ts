import { requireEnv } from "./env";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: requireEnv("DATABASE_HOST"),
  user: requireEnv("DATABASE_USER"),
  password: requireEnv("DATABASE_PASSWORD"),
  database: requireEnv("DATABASE_NAME"),
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

export { prisma };
