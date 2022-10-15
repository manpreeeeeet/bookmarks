const express = require("express");
const app = express();
const connectDB = require("./utils/connectDB");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");

// spells
require("dotenv").config();
require("express-async-errors");

// routers
const bookmarkRoute = require("./routes/bookmark");
const userRoute = require("./routes/user");
const authenticate = require("./middleware/authorization");
const notFound = require("./middleware/not-found");

// cors
const corOptions = {
  origin: "https://bookmarks-by-manpreet.netlify.app",
  optionsSuccessStatus: 200,
};
app.use(cors(corOptions));

app.use(express.json());
app.use("/user", userRoute);
app.use("/bookmark", bookmarkRoute);
//
// app.use(express.static("client/bookmark/build")); // set static folder
// app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "client", "bookmark", "build", "index.html")
//     );
// });

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
