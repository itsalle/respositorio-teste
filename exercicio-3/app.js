// arquivo usado para criar servidor em node.js com express. o nome é comum na comunidade
const express = require('express');

// invocando a função express para criar uma instância de aplicativo, que é armazenada nessa constante
const app = express();

// ouvir requisições. ele automaticamente incialiaza um servidor e seta o domínimo como localhost
app.listen(3000);

//importar rotas

const index = require('./src/routes/index')
const tarefas = require('./src/routes/tarefasRoute')

app.use((req, res, next) => {
    console.log('nova requisição realizada')
       
    next()
})

app.use('/', index)
app.use('/tarefas', tarefas)


   