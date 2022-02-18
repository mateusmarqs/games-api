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

router.post('/create/game', (req, res) => {

    var { title, year, price, category  } = req.body

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

router.delete('/delete/game/:id', (req, res) => {

    const id = req.params.id
    
    Game.findByIdAndDelete(id)
        .then(() => res.send({ message: `O jogo de id: ${id} foi deletado com sucesso.` }))
        .catch(() => res.status(400).send({ error: 'o ID do jogo informado não foi encontrado.' }))
})

router.put('/update/game/:id', (req, res) => {
    var id = req.params.id
    var { title, year, price, category } = req.body

    Game.findByIdAndUpdate(id, {
        title,
        year,
        price,
        category
    })
        .then(() => res.send({ message: `O jogo de id: ${id} foi atualizado com sucesso.`  }))
        .catch(() => res.status(400).send({ error: 'o ID do jogo informado não foi encontrado.' }))

})

module.exports = router