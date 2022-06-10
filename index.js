const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", (req, res) => {
  console.log(req.body);
});
app.listen(3000, () => {
  console.log("Run server on port 3000");
});
