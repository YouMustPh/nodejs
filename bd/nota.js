const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTyepes) => {
  const Nota = sequelize.define(
    "Nota",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNul: false,
        primatryKey: true,
        autoIncrement: true,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuario",
          key: "id",
        },
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "nota",
      timestamps: false,
    }
  );
  return Nota;
};
