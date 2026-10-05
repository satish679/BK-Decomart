import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(cors());
app.use(express.json());

const staticDir = path.resolve(__dirname, "static");
if (fs.existsSync(staticDir)) {
  app.use("/api/static", express.static(staticDir));
}

app.get("/api", (req, res) => {
  res.json({ service: "BK Decomart", status: "ok" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/generated-images", (req, res) => {
  const genDir = path.join(staticDir, "img", "generated");
  if (!fs.existsSync(genDir)) {
    return res.json({ images: [] });
  }
  const files = fs
    .readdirSync(genDir)
    .filter((f) => f.endsWith(".png") && fs.statSync(path.join(genDir, f)).size > 5000)
    .map((f) => path.basename(f, ".png"))
    .sort();
  res.json({ images: files });
});

if (process.env.NODE_ENV === "production") {
  const distDir = path.resolve(__dirname, "dist");
  app.use(express.static(distDir));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(distDir, "index.html"));
  });
} else {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true, host: "0.0.0.0" },
    appType: "spa",
  });
  app.use(vite.middlewares);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
