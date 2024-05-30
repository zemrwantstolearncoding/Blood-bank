const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const { connect } = require("mongoose");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test",require("./routes/testRoutes"));
app.use("/api/v1/test",require("./routes/authRoutes"));
//port
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
