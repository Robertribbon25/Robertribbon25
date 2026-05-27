import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import mongoose from "mongoose";
import JSZip from "jszip";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for JSON requests
app.use(express.json());

// ------------------------------------------------------------------
// Database Configuration (MongoDB with Safe Graceful Fallback System)
// ------------------------------------------------------------------
const MONGODB_URI = process.env.MONGODB_URI;
let isMongoConnected = false;

async function connectDB() {
  if (!MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI is not configured in .env. Using high-integrity local JSON database fallback.");
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    isMongoConnected = true;
    console.log("✅ MongoDB successfully connected on startup!");
  } catch (err: any) {
    console.error("❌ Failed to connect to MongoDB, failing back safely to JSON database.", err.message);
  }
}
connectDB();

// Schema definitions
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const MessageModel = mongoose.models.Message || mongoose.model("Message", MessageSchema);

// File based fallback DB configuration
const DATA_DIR = path.join(process.cwd(), "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const LOCAL_DB_PATH = path.join(DATA_DIR, "messages.json");

// Save fallback handler
async function saveMessageLocal(data: { name: string; email: string; subject: string; message: string }) {
  let messages = [];
  if (fs.existsSync(LOCAL_DB_PATH)) {
    try {
      const content = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
      messages = JSON.parse(content);
    } catch {
      messages = [];
    }
  }
  const record = {
    id: "msg_" + Math.random().toString(36).substr(2, 9),
    ...data,
    createdAt: new Date().toISOString()
  };
  messages.push(record);
  fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(messages, null, 2), "utf-8");
  return record;
}

// Get lists fallback handler
async function getMessagesLocal() {
  if (fs.existsSync(LOCAL_DB_PATH)) {
    try {
      const content = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
      return JSON.parse(content);
    } catch {
      return [];
    }
  }
  return [];
}

// ------------------------------------------------------------------
// API Routes
// ------------------------------------------------------------------

// POST Message API
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, message: "Please supply all required fields (name, email, subject, message)." });
    return;
  }

  try {
    if (isMongoConnected) {
      const entry = new MessageModel({ name, email, subject, message });
      await entry.save();
      console.log(`📡 Message saved to MongoDB from ${name} (${email})`);
      res.status(201).json({ success: true, message: "Your message has been received! Stored securely in MongoDB.", data: entry });
    } else {
      const record = await saveMessageLocal({ name, email, subject, message });
      console.log(`📁 Message saved to Local Fallback Database from ${name} (${email})`);
      res.status(201).json({ success: true, message: "Your message has been received! (Stored in Local JSON Database file fallback).", data: record });
    }
  } catch (error: any) {
    console.error("❌ Contact endpoint failed:", error);
    res.status(500).json({ success: false, message: "Internal server error saving message.", error: error.message });
  }
});

// GET Messages (for debugging/verification in the UI)
app.get("/api/messages", async (req, res) => {
  try {
    if (isMongoConnected) {
      const items = await MessageModel.find().sort({ createdAt: -1 }).limit(50);
      res.json({ success: true, storage: "MongoDB", data: items });
    } else {
      const items = await getMessagesLocal();
      res.json({ success: true, storage: "Local JSON", data: items.reverse() });
    }
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ZIP Download API: Recursively builds a clean ZIP of the current developer workspace files on demand
app.get("/api/download-zip", async (req, res) => {
  try {
    const zip = new JSZip();
    const workspaceRoot = process.cwd();

    async function zipDir(dirPath: string) {
      const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        const relativePath = path.relative(workspaceRoot, fullPath);

        // Filter out bulky generated paths & system trackers in the live cloud environment
        if (
          item.name === "node_modules" ||
          item.name === "dist" ||
          item.name === ".git" ||
          item.name === ".cache" ||
          item.name === "package-lock.json" ||
          item.name === "yarn.lock" ||
          item.name === "pnpm-lock.yaml" ||
          item.name === ".gcloud" ||
          item.name === ".env"
        ) {
          continue;
        }

        if (item.isDirectory()) {
          zip.folder(relativePath);
          await zipDir(fullPath);
        } else {
          const content = await fs.promises.readFile(fullPath);
          zip.file(relativePath, content);
        }
      }
    }

    await zipDir(workspaceRoot);

    // Also inject a helper .env file explaining configuration to the user who downloads the ZIP
    zip.file(".env", `# Developer Portfolio Local Environment Config
PORT=3000
MONGODB_URI=mongodb://localhost:27017/robert-portfolio
`);

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    res.setHeader("Content-Disposition", "attachment; filename=robert-portfolio-source.zip");
    res.setHeader("Content-Type", "application/zip");
    res.send(zipBuffer);
  } catch (err: any) {
    console.error("❌ ZIP Compilation Failed:", err);
    res.status(500).send(`Failed to package ZIP archive: ${err.message}`);
  }
});

// ------------------------------------------------------------------
// Vite / Static Assets Handler
// ------------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("⚙️ Vite development middleware injected.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("📦 Serving production build from dist/ folder.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio application running safely at http://localhost:${PORT}`);
  });
}

startServer();
