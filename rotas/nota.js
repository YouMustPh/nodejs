const {Router} = require("express");
const router = Router();

router.get("/:id?",  (req, res) => {
  const {id} = req.params;
    if(id){
        res.send("Nota ID " + id);
    } else {
        res.send("Todas as notas")
    }
  
});

router.post("/", (req, res) =>{
  console.log(req.body);
  res.send("POST nota");
});

router.put("/:id",(req, res) => {
  res.send("PUT nota");
});

router.delete("/:id", (req, res)=> {
  res.send("DELETE nota");
});

module.exports = router;
