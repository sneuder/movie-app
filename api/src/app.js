const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const routes = require("./routes/index.js");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use("/", routes);
module.exports = server;