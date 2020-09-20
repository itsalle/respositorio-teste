const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/tarefas", controller.getAll)

module.exports = router;