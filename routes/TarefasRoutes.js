const express = require('express');
const router = express.Router();

const TarefasController = require("../controllers/TarefasController");

router.get('/tarefas', TarefasController.index);
// router.post('/tarefas', TarefasController.index);
// router.delete('/tarefas/:id', TarefasController.index);
// router.put('/tarefas/:id', TarefasController.index);

module.exports = router;
