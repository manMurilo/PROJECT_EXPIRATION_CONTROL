const express = require('express')
const app = express()

const port = 3333

app.get('/',(request, response) => {
  return response.send(`Servidor Rodando`)
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}`)
})