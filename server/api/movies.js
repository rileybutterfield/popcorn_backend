const router = require('express').Router()
const {Movie} = require('../db/models')
// const permit = require('./authorization')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params)
    const singleMovie = await Movie.findByPk(req.params.id)
    console.log(singleMovie)
    res.json(singleMovie)
  } catch (err) {
    next(err)
  }
})

//GET /api/movies
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.findAll()
    console.log(movies)
    res.json(movies)
  } catch (err) {
    next(err)
  }
})
