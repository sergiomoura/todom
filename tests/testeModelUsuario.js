const { Usuario, sequelize } = require('../models');
Usuario.findAll({include:"tarefas"}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)