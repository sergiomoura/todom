// Levantando os parâmetros de ambiente
require("dotenv").config();

// Trazendo dependências
const path = require("path");
const express = require('express');

// Trazendo rotas
const AuthRouter = require("./routes/AuthRoutes");

// Criando o app express
const app = express();

// Middleware que permite que o express interprete requisições com json no body
app.use(express.json());

// Configurando pasta public para requisições estáticas
app.use(express.static(path.join(__dirname, 'public')));

// Configurando rotas
app.use('/api/', AuthRouter);

// Levantando o servidor
app.listen(process.env.HTTP_PORT);
