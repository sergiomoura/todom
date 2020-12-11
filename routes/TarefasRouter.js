// Importar os middlewares
const VerificaSeTemToken = require('../middleware/VeriricaSeTemToken')

// importar o express
const express = require('express');

// criar o router utilizando a função express.Router
const router = express.Router();

// Criar uma rota get para /tarefas retornando qquer coisa...
router.get('/tarefas', VerificaSeTemToken, (req,res) => {res.send(req.token)})

// Exportar o router
module.exports = router;