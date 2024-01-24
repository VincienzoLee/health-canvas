const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const emergencyRouter = require("./emergency/emergency");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/emergency", emergencyRouter);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
