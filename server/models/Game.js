// const mongoose = require('mongoose')
const mongoose = require('../../config/database') 

const GameModel = new mongoose.Schema({
    title: String,
    year: String,
    price: String,
    category: String
})

const Game = mongoose.model('games', GameModel)

module.exports = Game