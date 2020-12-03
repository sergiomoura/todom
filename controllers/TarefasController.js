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
    },

    destroy: async (req, res) => {
        console.log(req.params.id);
        
        await Tarefa.destroy({
            where:{
                usuario_id: req.user.id,
                id: req.params.id,
            }
        });
        res.json({"msg":"Ok"});
    },

    marcarFeito: async (req, res) => {

        // Carregar a tarefa que pretendemos marcar como feita
        let tarefa = await Tarefa.findOne(
            {
                where:{
                    id:req.params.id,
                    usuario_id:req.user.id
                }
            });

        // Alterar o status da tarefa
        tarefa.feito = true;

        // Salvar a tarefa no BD
        tarefa.save();

        // Retornar mensagem de sucesso
        res.json({msg:"ok"});

    },

    marcarNaoFeito: async (req, res) => {

        // Carregar a tarefa que pretendemos marcar como feita
        let tarefa = await Tarefa.findOne(
            {
                where:{
                    id:req.params.id,
                    usuario_id:req.user.id
                }
            });

        // Alterar o status da tarefa
        tarefa.feito = false;

        // Salvar a tarefa no BD
        tarefa.save();

        // Retornar mensagem de sucesso
        res.json({msg:"ok"});

    }
}