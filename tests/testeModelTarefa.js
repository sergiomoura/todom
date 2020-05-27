const { Tarefa, sequelize } = require('../models');
Tarefa.findAll({include:"usuario"}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)