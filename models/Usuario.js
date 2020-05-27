let Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario', // <== primeiro param: Nome do model
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            senha:{
              type: DataTypes.STRING,
            }
        },
        {
            tableName: "usuarios",
            timestamps: false,
        }
    );

    usuario.associate = (models) => {
        usuario.hasMany(models.Tarefa, {foreignKey: 'usuario_id',as: 'tarefas'});
    }

    return usuario;
}

module.exports = Usuario;