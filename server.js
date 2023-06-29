const express = require("express");
// express app
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const morgan = require("morgan");
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");
const subCategoryRoute = require("./routes/subCategoryRoute");

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
app.use("/api/subcategories", subCategoryRoute);

app.all("*", (req, res, next) => {
  //create error and send it to error handling middleware
  // const err = new Error(`can't find this route: ${(req, originalUrl)}`);
  // next(err.message);
  // eslint-disable-next-line no-undef
  next(new ApiError(`can't find this route: ${(req, originalUrl)}`, 400));
});

// global error handling middlware for express
app.use(globalError);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App Running in port ${PORT}`);
});

// handle regictions outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("shutting down...");
    process.exit(1);
  });
});
