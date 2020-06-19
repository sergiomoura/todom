const { Tarefa } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    index: async (req,res)=>{

        // Verificando se o req tem o header Authorization
        if(!req.headers.authentication){
            return res.status(403).json({error: "error"});
        }

        // Capturando o token do header
        let token = req.headers.authentication.substr(7);
        
        // Capturar o usuário dono do token
        let {usuario, iat, exp} = jwt.decode(token);

        // Testar a expiração do token
        console.log(exp + "<" + Date.now());
        if(exp*1000 < Date.now()){ // GAMBIARRA
            return res.status(401).json({erro:"Token expirado"});
        }

        // Validando token
        if(!jwt.verify(token,"segredo")){
            return res.status(403).json({error: "error"});
        }

        // Levantar as tarefas desse usuário
        let tarefas = await Tarefa.findAll({where:{usuario_id:usuario.id}});

        // Retornando o array de tarefas
        res.status(200).json(tarefas);
    }
}