const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("GET usuario");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST usuario");
});

router.put("/", (req, res) => {
  res.send("PUT usuario");
});

router.delete("/", (req, res) => {
  res.send("DELETE usuario");
});
module.exports = router;
