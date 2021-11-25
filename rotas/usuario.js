const { Router } = require("express");
const {Usuario} = require('../bd')
const router = Router();

router.get("/", (req, res) => {
  res.send("GET usuario");
});

router.post("/", async (req, res) => {
  const usuario = await Usuario.create(req.body)
  res.send(usuario);
});

router.put("/", (req, res) => {
  res.send("PUT usuario");
});

router.delete("/", (req, res) => {
  res.send("DELETE usuario");
});
module.exports = router;
