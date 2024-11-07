require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

app.use("/user", userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
