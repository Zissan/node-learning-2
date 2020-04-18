const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

//middleware
app.use((req, res, next) => {
  if (req.url.indexOf("/api") > -1) {
    next();
  } else {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  }
});

app.get("/api/hello", (req, res, next) => {
  res.send("Hello");
});

app.listen(4000, () => {
  console.log("APP RUNNING ON PORT 3000");
});
