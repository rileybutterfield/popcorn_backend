const db = require('../db')
const Sequelize = require('sequelize')

const Movie = db.define('movie', {
  // status: {
  //   type: Sequelize.ENUM('liked', 'notLiked'),
  //   defaultValue: 'notLiked'
  // },
  // sessionId: {type: Sequelize.STRING},
  // userId: {type: Sequelize.INTEGER},
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

module.exports = Movie
