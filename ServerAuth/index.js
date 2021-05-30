const express = require("express");
const App = express();
const http = require("http");
const morgan = require("morgan");
const Route = require("./router");
const db = require("./config/db");
// DB connection
db();
// App Setup
App.use(morgan("combined"));
App.use(express.json());
Route(App);
// Log Sever
const Port = process.env.PORT || 3090;
const server = http.createServer(App);
server.listen(Port);
console.log(`Server Listing on :${Port}`);
