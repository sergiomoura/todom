// Levantando os parâmetros de ambiente
require("dotenv").config();

// Importando roteadores
const AuthRouter = require('./routes/AuthRouter');

// Trazendo dependências
const path = require("path");
const express = require('express');

// Criando o app express
const app = express();

// Configurando pasta public para requisições estáticas
app.use(express.static(path.join(__dirname, 'public')));

// Tentando interpretar o corpo da req como JSON
app.use(express.json());

// Configurando roteadores
app.use('/', AuthRouter);

// Levantando o servidor
app.listen(process.env.HTTP_PORT);
