const express = require("express");
const app = express();
const path = require("node:path");
const router = require("./routes/indexRouter");
const assetsPath = path.join(__dirname, "public");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 8000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
