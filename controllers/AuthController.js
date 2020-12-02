const { Usuario } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    index: async (req, res) =>{

        // Capturar o email e a senha a partir do req.body
        const {email, senha} = req.body;

        // Buscar o usuário no BD que tem este email vindo do req.body
        // Dica: Usuario.findOne({where:{....}})
        const usuario = await Usuario.findOne({where:{email}});

        // Caso usuário não exista, retorar erro 401
        if(usuario == null){
            return res.status(401).json({error:"Falha no login"});
        }

        // Valida a senha cadastrada do usuário com a senha enviada
        // Caso a validação falhe, retornar erro 401
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json({error:"Falha no login!!"});
        }

        res.send("Login validado!!!!");
        // ...

        //console.log(req.body);
        //res.send(req.body);
    }
}