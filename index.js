const express = require("express");
const app = express();
const porta = 3000;
const usuario = require("./rotas/usuario");
const nota = require("./rotas/nota");

app.use(express.json());
app.use("/usuario", usuario);
app.use("/nota", nota);

app.listen(porta, function () {
  console.log("Aplicação rodando na porta " + porta);
});
