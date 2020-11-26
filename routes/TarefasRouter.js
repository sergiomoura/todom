const express = require("express");
const router = express.Router();

const TarefasController = require('../controllers/TarefasController');
const VerificaSeTemToken = require("../middlewares/VerificaSeTemToken");

router.get('/tarefas', VerificaSeTemToken, TarefasController.index);

module.exports = router;