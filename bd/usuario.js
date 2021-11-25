const { DataTypes } = require("sequelize/types")

module.exports = (sequelize,DataTyepes) => {
    const Usuario = sequelize.define('usuario', {
        id: {
            type: DataTypes.INTEGER,
            allowNul: false,
            primatryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull = false,
        },
        email: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'usuario',
    timestamps: false,
});
    return Usuario
}



