const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const LOG_FILE = path.join(__dirname, "log.txt");

// In-memory storage for IP choices (resets on server restart)
const ipChoices = new Map();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Check if IP has already made a choice
app.get("/check-ip", (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  const choice = ipChoices.get(ip);
  res.json({ hasChosen: !!choice, choice: choice || null });
});

app.post("/log", (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  const entry = JSON.stringify({ ...req.body, ip });
  
  // Store final choice for this IP
  if (req.body.choice === "yes" || req.body.choice === "no") {
    ipChoices.set(ip, req.body);
  }
  
  fs.appendFile(LOG_FILE, entry + "\n", () => {});
  res.sendStatus(200);
});

app.get("/log", (req, res) => {
  fs.readFile(LOG_FILE, "utf8", (err, data) => {
    if (err) return res.send("");
    res.type("text/plain").send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Open http://localhost:${PORT}`);
});
