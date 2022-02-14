const express = require('express')
const router = express.Router()

const Game = require('../models/Game')

router.get('/games', (req, res) => {

    Game.find()
        .then(games => res.json(games))
})

router.get('/game/:id', (req, res) => {

    var id = req.params.id
    
    Game.findById(id)
        .then(game => res.json(game) )
        .catch(() => res.status(400).send({ error: 'O jogo não foi encontrado' }))
})

router.post('/game', (req, res) => {

    var { title, year, price, category  } = req.body

    console.log(title)

    const game = new Game({
        title,
        year,
        price,
        category
    })

    game.save()
        .then(() => res.status(200))
        .catch(() => res.status(400).send({ error: 'Erro ao cadastrar o jogo' }))

    res.sendStatus(200)
})

router.delete('/game/:id', (req, res) => {

    const id = req.params.id
    
    Game.findByIdAndDelete(id)
        .then(() => res.status(200))
        .catch(() => res.status(400).send({ error: 'o ID do jogo informado não foi encontrado.' }))
})

router.put('/game/:id', (req, res) => {
    var id = req.params.id
    var { title, year, price, category } = req.body

    Game.findByIdAndUpdate(id, {
        title,
        year,
        price,
        category
    })
        .then(() => res.status(200))
        .catch(() => res.status(400).send({ error: 'o ID do jogo informado não foi encontrado.' }))

})

module.exports = router