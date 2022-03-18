const express = require("express");
const app = express();
const connectDB = require("./utils/connectDB");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
// spells
require("dotenv").config();
require("express-async-errors");
app.use(cors());

// routers
const bookmarkRouter = require("./routes/bookmark");
const notFound = require("./middleware/not-found");

app.use(express.json());
app.use("/", bookmarkRouter);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
const startServer = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};
startServer();
//ToDO: Sanitize urls in a better way
