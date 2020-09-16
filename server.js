const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const PORT = +process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== "production";
const app = next({ isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
