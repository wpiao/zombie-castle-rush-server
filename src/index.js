const express = require("express");
require("dotenv").config();
const http = require("http");
const SocketService = require("./SocketService");
const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Welcome to Zombie Castle Rush Server!");
});

server.listen(PORT, () => {
  console.log("Server listening on: ", PORT);
  const socketService = new SocketService();
  socketService.attachServer(server);
});
