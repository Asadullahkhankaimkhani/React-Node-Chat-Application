const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("HELL is Working ");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", () => {
  console.log("New Connection");
});

server.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
