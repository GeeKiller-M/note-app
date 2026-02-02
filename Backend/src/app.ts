import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.routes";
import tagRoutes from "./modules/tag/tag.routes";
import noteRoutes from "./modules/note/note.routes";
import { globalErrorHandler } from "./middleware/errors";
import { env } from "./lib/env";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
};

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/notes", noteRoutes);

app.use(globalErrorHandler)

export default app;
