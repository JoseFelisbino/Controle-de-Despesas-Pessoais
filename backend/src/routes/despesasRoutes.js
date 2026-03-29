const controller = require('../controller/despesaController');
const express = require('express');

const router = express.Router();

router.get("/despesas", controller.listar);
router.get("/despesas/:id", controller.buscarPorId);
router.get("/despesas/classificacao/:classificacao", controller.filtroPorClassificacao);
router.post("/despesas", controller.cadastrar);
router.put("/despesas/:id", controller.atualizar);
router.delete("/despesas/:id", controller.deletar);

module.exports = router;

    