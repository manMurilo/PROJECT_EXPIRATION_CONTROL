const express = require('express')
const app = express()

const port = 3000

app.get('/',(request, response) => {
  return response.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}`)
})