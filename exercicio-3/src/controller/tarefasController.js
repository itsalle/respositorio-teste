const tarefas = require('../model/tarefas.json')

const getALL = (req, res) => {
    console.log(req.url);
    res.status(200).send(tarefas);
}

module.exports = { getALL }
