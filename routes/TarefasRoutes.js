const express = require('express');
const router = express.Router();

const TarefasController = require("../controllers/TarefasController");

router.get('/tarefas', TarefasController.index);

module.exports = router;
