const express = require('express')
const padraoRoute = require('./routes/padrao.js');

const app = express()
const port = 80

/* Padrão Rota */
app.use(padraoRoute);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})