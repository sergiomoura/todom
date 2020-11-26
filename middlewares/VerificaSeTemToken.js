module.exports = (req,res,next) => {

    // Verificar se o header da requisição contém o campo authorization
    // e se esse campo contém os dados "bearer 187239812791827391873918723912783"

    let authorization = req.header("authorization");

    if(!authorization){
        res.status(400).json({error:"Requisição inválida"});
        return;
    }

    // Interpretando o campo authorization do header
    let dados = authorization.split(" ");
    if(dados[0] != "bearer" || dados[1] == undefined){
        res.status(400).json({error:"Requisição inválida"});
        return;
    }

    // Atribuindo o token no objeto da requisição
    // para que ele seja tratado pelo próximo middleware.
    req.token = dados[1];

    // Indo para o próximo middleware
    next();
    
}
