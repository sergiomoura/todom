// importar o express
const express = require('express');

// criar o router utilizando a função express.Router
const router = express.Router();

// Criar uma rota get para /tarefas retornando qquer coisa...
router.get('/tarefas', (req,res) => {res.send('qualquer coisa...')})

// Exportar o router
module.exports = router;