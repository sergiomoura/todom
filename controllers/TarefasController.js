const { Tarefa } = require('../models');

module.exports = {
    index: async (req, res) => {

        let tarefas = await Tarefa.findAll({where:{usuario_id:req.user.id}})
        // console.log(tarefas.map(a => a.toJSON()));
        res.json(tarefas);

    },

    store: async (req, res) => {
        let tarefa = await Tarefa.create({
            texto: req.body.texto,
            prioridade: req.body.prioridade,
            usuario_id: req.user.id
        });
        res.status(201).json(tarefa);
    }
}