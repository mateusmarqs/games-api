const express = require('express')

const app = express()
const port = 3000

const GameController = require('./server/controllers/GameController')

// Body Parser
app.use(express.urlencoded ({
    extended: false
}))  

app.use(express.json())

app.use(GameController)

app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})