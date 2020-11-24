const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Get request succeeded" });
});

app.post("/", (req, res) => {
  res.send({ message: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`...Server is running on port ${PORT}`));
