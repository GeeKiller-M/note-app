import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.routes";
import tagRoutes from "./modules/tag/tag.routes";
import noteRoutes from "./modules/note/note.routes";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/notes", noteRoutes);

app.use("/", (_req, res) => {
  res.json({ status: "ok", message: "API running" });
});

export default app;
