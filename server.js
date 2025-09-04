const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

app.post("/rtirl", (req, res) => {
  const data = req.body;
  console.log("RTIRL data:", data);
  io.emit("rtirl_update", data);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("RTIRL backend běží!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
