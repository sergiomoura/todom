const { Usuario } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req,res)=>{
        
        // Lendo dados do vorpo da requisição
        const {email,senha} = req.body;

        // Encontrando o usuário com o email passado
        const usuario = await Usuario.findOne({where:{email}})

        if(!usuario){
            return res.status(403).json({error:"Usuário não autorizado"});
        }

        if(!bcrypt.compareSync(senha,usuario.senha)){
            return res.status(403).json({error:"Usuário não autorizado"});
        }

        // removendo hash de usuário
        usuario.senha = undefined;

        // Criando o token
        let token = jwt.sign({usuario},"segredo");

        // Retornando as info do usuário com o token
        return res.status(200).json({usuario, token})
    }
}