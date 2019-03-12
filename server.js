const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const config = require("./config")

app.prepare().then(async () => {
  const server = express();

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(config.port)
});
