const db = require('../db')
const Sequelize = require('sequelize')

const Like = db.define('like', {
  // title: {
  //   type: Sequelize.STRING
  // },
  // image: {
  //   type: Sequelize.STRING
  // },
  // runtime: {
  //   type: Sequelize.STRING
  // },
  // genre: {
  //   type: Sequelize.STRING
  // },
  // description: {
  //   type: Sequelize.TEXT
  // }
})

module.exports = Like
