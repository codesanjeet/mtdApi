const express = require("express");
const app = express();
const cors = require("cors");
const mockRouters = require("./routers/mockRouters");
const bodyParser = require("body-parser");
// app.get("/", (req, res) => {
//   let hel = "Hello!";
//   res.status(200).json({
//     status: "success",
//     data: hel,
//   });
// });
// Apply CORS middleware
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(bodyParser.json());
//ROUTES
app.use("/api/v1/test-series", mockRouters);
module.exports = app;
