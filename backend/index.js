const express = require("express");
const app = express();
const cors = require("cors");
const portNumber = 5050;

app.use(cors());
app.use(express.json());

app.post("/api/auth/login", (req, res) => {
  console.log(req.body);
  res.send("test");
});

app.listen(portNumber, (error) => {
  error
    ? console.log("---ERROR ON SERVER START---")
    : console.log(`Server on running on port: ${portNumber}`);
});
