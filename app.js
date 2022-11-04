const express = require('express')
const padraoRoute = require('./routes/padrao.js');

const app = express()
const port = 3001

/* Padrão Rota */
app.use(padraoRoute);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})