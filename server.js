// Levantando os parâmetros de ambiente
require("dotenv").config();

// Trazendo dependências
const path = require("path");
const express = require('express');
const AuthRouter = require('./routes/AuthRouter');

// Criando o app express
const app = express();

// Configurando pasta public para requisições estáticas
app.use(express.static(path.join(__dirname, 'public')));

// Setando middleware que permite o express receber json no body
app.use(express.json());

// Aplicando middlewares de roteadores
app.use('/',AuthRouter);

// Levantando o servidor
app.listen(process.env.HTTP_PORT);
