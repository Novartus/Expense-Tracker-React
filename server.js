const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Server is live..."));

app.listen(PORT, console.log(`Server is live... @ Port:${PORT}`.red));
