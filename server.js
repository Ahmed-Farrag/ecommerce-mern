const express = require("express");
// express app
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const morgan = require("morgan");
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");

// connect with db
dbConnection();

// middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use("/api/categories", categoryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App Running in port ${PORT}`);
});
