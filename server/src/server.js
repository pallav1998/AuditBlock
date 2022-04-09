const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

const daosController = require("./controllers/daos.controller");
const contributorsController = require("./controllers/contributors.controller");

app.use("/daos", daosController);
app.use("/contributors", contributorsController);

const start = async () => {
  await connect();

  app.listen(2244, async () => {
    console.log("Listening at port 2244...");
  });
};

module.exports = start;
