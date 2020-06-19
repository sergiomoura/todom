const { Tarefa } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    index: (req,res)=>{

        // Verificando se o req tem o header Authorization
        if(!req.headers.authentication){
            return res.status(403).json({error: "error"});
        }

        // Capturando o token do header
        let token = req.headers.authentication.substr(7)
        
        // Validando token
        if(!jwt.verify(token,"segredo")){
            return res.status(403).json({error: "error"});
        }

        // Retornando o array de tarefas
        res.status(200).json([{texto:"lalala"},{texto:"lelele"}]);
    }
}