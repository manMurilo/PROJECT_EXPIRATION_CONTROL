const express = require('express')
const app = express()

port = process.env.PORT || 80

app.get('/',(request, response) => {
  return response.send(`Servidor Rodando`)
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}`)
})