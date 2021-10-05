const express = require("express");
// create server
const server = express();
// create routes
server.all("/", (req, res) => {
  res.send("Bot is running");
});
// function to start server
const ping = () => {
  server.listen(3000, () => {
    console.log("Server is running!");
  })
};

module.exports = ping;