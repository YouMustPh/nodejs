const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("GET nota");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("POST nota");
});

router.put("/", function (req, res) {
  res.send("PUT nota");
});

router.delete("/", function (req, res) {
  res.send("DELETE nota");
});

module.exports = router;
