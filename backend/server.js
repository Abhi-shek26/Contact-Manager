import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/ContactRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// API routes FIRST
app.use("/api/contacts", contactRoutes);

// Serve frontend static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend/dist")));

// ✅ SPA fallback (Express 5 safe)
app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/dist/index.html")
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
