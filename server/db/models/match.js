const db = require('../db')
const Sequelize = require('sequelize')

const Match = db.define('match', {
  title: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  runtime: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Match
