const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/authRoute")
const mongoose = require("mongoose")
const MONGO_DB_URL = require("./config/dbConfig")
const portNumber = 5050;

mongoose.connect(MONGO_DB_URL)
  .then((data) => {
    console.log("Mongo DB is connect")
  }
  )
  .catch((error) => {
    console.log(error)
    console.log("Error while connecting to mongo DB")

  }
  )

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute)



app.listen(portNumber, (error) => {
  error
    ? console.log("---ERROR ON SERVER START---")
    : console.log(`Server on running on port: ${portNumber}`);
});
