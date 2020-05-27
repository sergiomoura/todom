let Tarefa = (sequelize, DataTypes) => {
    let tarefa = sequelize.define(
        'Tarefa', // <== primeiro param: Nome do model
        {
            texto: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            prioridade:{
              type: DataTypes.ENUM(['1','2','3']),
              defaultValue: '1'
            },
            feito:{
              type: DataTypes.BOOLEAN,
              defaultValue: 0,
              allowNull:false
            },
            usuario_id:{
                type: DataTypes.INTEGER(11),
            }
        },
        {
            tableName: "tarefas",
            timestamps: true,
        }
    );

    tarefa.associate = (models) => {
        tarefa.belongsTo(models.Usuario, {foreignKey: 'usuario_id',as: 'usuario'});
    }

    return tarefa;
}

module.exports = Tarefa;