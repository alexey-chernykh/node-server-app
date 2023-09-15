const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const log = require("./modules/util/logger");
const cityComponent = require("./modules/components/cities/cities");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const jsonParser = bodyParser.json();

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/api", (req, res) => {
  res.json(cityComponent.getCities());
});

app.post("/api", jsonParser, function (req, res) {
  cityComponent.addCity(req.body);
  res.json(cityComponent.getCities());
});

app.put("/api", jsonParser, function (req, res) {
  cityComponent.editCity(req.body.object, req.body.index);
  res.json(cityComponent.getCities());
});

app.delete("/api", jsonParser, function (req, res) {
  cityComponent.removeCity(req.body.index);
  res.json(cityComponent.getCities());
});
