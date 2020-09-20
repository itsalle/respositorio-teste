const express = require('express')
const router = express.Router()

router.get('/', (req , res) => {
    res.status(200).send({
        'title': 'Reprograma - on7 Backend - ToDo List',
        'version': '1.0.0',
        'label': 'APIMON',
        'turma': 'A melhor de todas, me prometeram bolo de rolo'
    })
});

module.exports = router;