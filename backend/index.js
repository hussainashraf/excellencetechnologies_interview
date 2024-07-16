const express = require('express');
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const connectdb = require("./config/db")
const authRoutes = require("./routes/auth")
var cors = require('cors')
const passport = require('passport');

require("dotenv").config();

const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())

connectdb();

app.use('/auth',authRoutes)

app.use(passport.initialize());


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
