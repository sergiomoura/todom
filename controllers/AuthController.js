const { Usuario } = require('../models'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    login: async (req, res) =>{

        // Capturar as informações da requisição
        const {email, senha} = req.body;

        // Carregar o usuário que seja dono do email enviado
        const user = await Usuario.findOne({ where:{ email }});

        // Tratando o caso de usuário inexistente
        if(!user){
            return res.status(401).json({error: "Usuário/Senha inválidos"});
        }

        // Validar o usuário
        const loginOk = await bcrypt.compare(senha, user.senha);

        // Tratando o caso da validação da senha falhar
        if(!loginOk){
            return res.status(401).json({error: "Usuário/Senha inválidos"});
        }

        // Arrancando a senha do obj user
        user.senha = undefined;

        // Gerar o token (jwt - biblioteca: jsonwebtoken)
        const token = jwt.sign({user}, config.tokenSecret);

        // Enviar o token
        return res.json({user, token});

    }
}