const { Sequelize,DataTypes } = require("sequelize");
const bd = {};
const inicializarChecklist = require ("./checklist")
const inicializarUsuario = require ("./usuario")
const inicializarNota = require ("./nota");
const checklist = require("./checklist");



const options = {
  username: "admin",
  password: "notes123",
  database: "notes",
  dialect: "mysql",
  host: "notes.cgssmrnlwpdu.us-east-2.rds.amazonaws.com",
};

const sequelize = new Sequelize(options);
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado ao banco " + options.database);
  })
  .catch((erro) => {
    console.log("Erro ao se conectar " + options.database);
    console.log("erro");
  });

  const Usuario = inicializarUsuario (sequelize,DataTypes);
  const Nota = inicializarNota (sequelize,DataTypes);
  const Checklist = inicializarChecklist (sequelize,DataTypes);

  bd = {Usuario, Nota, Checklist}

  Nota.hasMany(checklist, { as: 'checklists', foreingKey:'notaId'})
  Nota.belongsTo(Usuario, {as: 'usuario', foreingKey:'usuarioId'})

  bd.Sequelize = Sequelize;
  bd.sequelize = sequelize;

  module.exports = bd;
