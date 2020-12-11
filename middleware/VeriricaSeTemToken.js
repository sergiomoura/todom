module.exports = (req, res, next) => {

    // Extrair o header Authorization
    let auth = req.headers.authorization;

    // Verificar se o header Authorization existe
    if(!auth){
        // Retornando o status 400: Bad Request
        return res.status(400).json({msg:"Erro"});
    }

    // Verificar se o header authorization tem o formato "bearer ____________"
    if(!auth.match(/^bearer\ .*$/)){
        return res.status(400).json({msg:"Erro - Auth mal formado"});
    }

    // Calar na requisição o TOKEN!
    req.token = auth.split(' ')[1];

    // Se tudo der certo
    next();
}