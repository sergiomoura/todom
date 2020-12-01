const { Tarefa } = require('../models');

module.exports = {
    index: async (req, res) => {

        let tarefas = await Tarefa.findAll({where:{usuario_id:req.user.id}})
        // console.log(tarefas.map(a => a.toJSON()));
        res.json(tarefas);
    }
}