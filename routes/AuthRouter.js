// Importando o AuthController
const AuthController = require('../controllers/AuthController');

// Importar o express
const express = require('express');

// Criar o roteador [ express.router() ]
const router = express.Router();

// Fazer com que o roteador responda qquer coisa para as req
// do tipo post para o endereço "/login"
router.post('/login', AuthController.index);

// Exportar o roteador
module.exports = router;
