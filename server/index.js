const convertIntToRomanNumeral = require("./convertIntToRomanNumeral");

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

// Enable CORS
app.use(cors());

// Middleware for handling JSON requests
app.use(express.json());

app.get("/romannumeral", (req, res) => {
  const integer = req.query.query;
  const output = convertIntToRomanNumeral(integer);
  res.json({ input: integer, output: output });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
