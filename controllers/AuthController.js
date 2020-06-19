const { Usuario } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req,res)=>{
        
        // Lendo dados do vorpo da requisição
        const {email,senha} = req.body;

        if(!email || !senha){
            return res.status(400).json({error:"Falha na requisição"});
        }

        // Encontrando o usuário com o email passado
        const usuario = await Usuario.findOne({where:{email}});

        // Vericando a existcia do usuário
        if(!usuario){
            return res.status(403).json({error:"Usuário não autorizado"});
        }

        // Validando a senha do usuário
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(403).json({error:"Usuário não autorizado"});
        }

        // removendo hash de usuário
        usuario.senha = undefined;

        // Criando o token jwt: JSON WEB TOKEN
        let token = jwt.sign({usuario}, "segredo", {expiresIn:5*60}); // Expira em 5min
        
        // Retornando as info do usuário com o token
        return res.status(200).json({usuario, token});
    }
}