const express = require('express');
const app = express();

app.listen(3000);

const index = require('./src/routes/index')
const tarefas = require('./src/routes/tarefasRoute')

app.use((req, res, next) => {
    console.log('nova requisição realizada')

    next()
});

app.use("/", index);
app.use("/tarefas", tarefas);