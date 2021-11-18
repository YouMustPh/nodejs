const express = require("express");
const router = express.Router();

router.get("/:id?", function (req, res) {
    if(req.params.id){
        res.send("Nota ID " + req.params.id);
    } else {
        res.send("Todas as notas")
    }
  
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("POST nota");
});

router.put("/:id", function (req, res) {
  res.send("PUT nota");
});

router.delete("/:id", function (req, res) {
  res.send("DELETE nota");
});

module.exports = router;
