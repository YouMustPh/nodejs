const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("GET usuario");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("POST usuario");
});

router.put("/", function (req, res) {
  res.send("PUT usuario");
});

router.delete("/", function (req, res) {
  res.send("DELETE usuario");
});
module.exports = router;
