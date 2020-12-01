const express = require("express");
const router = express.Router();

const TarefasController = require('../controllers/TarefasController');
const ValidaToken = require("../middlewares/ValidaToken");
const VerificaSeTemToken = require("../middlewares/VerificaSeTemToken");

router.get('/tarefas', VerificaSeTemToken, ValidaToken, TarefasController.index);

module.exports = router;