const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTyepes) => {
  const Checklist = sequelize.define(
    "Checklist",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primatryKey: true,
        autoIncrement: true,
      },
      notaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "nota",
          key: "id",
        },
      },

      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      concluida: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "checklist",
      timestamps: false,
    }
  );
  return Checklist;
};
