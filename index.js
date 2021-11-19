const express = require("express");
const app = express();
const porta = 3000;

const bd = require("./bd")
const usuario = require("./rotas/usuario");
const nota = require("./rotas/nota");

app.use(express.json());
app.use("/usuario", usuario);
app.use("/nota", nota);

app.listen(porta, () => {
  console.log("Aplicação rodando na porta " + porta);
});
