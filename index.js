const express = require('express')
const app = express()

app.get('/',(request, response) => {
  return response({message: 'Teste'})
})

app.listen(3000)