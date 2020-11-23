const router = require('express').Router()
const {Like, Movie, User, Match} = require('../db/models')
// const permit = require('./authorization')
module.exports = router

// router.get('/:id', async (req, res, next) => {
//   try {
//     console.log(req.params)
//     const singleMovie = await Movie.findByPk(req.params.id)
//     console.log(singleMovie)
//     res.json(singleMovie)
//   } catch (err) {
//     next(err)
//   }
// })

//GET /api/likes
router.get('/', async (req, res, next) => {
  try {
    const likedMovies = await Like.findAll({include: [Movie, User]})
    res.json(likedMovies)
  } catch (err) {
    next(err)
  }
})
// /post /api/likes
router.post('/', async (req, res, next) => {
  try {
    // console.log(req.body)
    const userResult = await User.findOne({
      where: {
        id: req.body.userId
      }
    })
    const user = userResult.dataValues
    const friendResult = await User.findOne({
      where: {
        id: user.friendId
      }
    })
    const friend = friendResult.dataValues
    const newLike = await Like.create(req.body)
    const friendMovieLike = await Like.findOne({
      where: {
        userId: friend.id,
        movieId: req.body.movieId
      }
    })
    const movieResult = await Movie.findByPk(req.body.movieId)
    const movie = movieResult.dataValues
    const matchInfo = {
      userId: user.id,
      movieId: movie.id,
      title: movie.title,
      image: movie.image,
      runtime: movie.runtime,
      genre: movie.genre,
      description: movie.description
    }
    if (friendMovieLike) {
      const matchExists = await Match.findOne({
        where: {
          movieId: movie.id,
          userId: friend.id
        }
      })
      if (!matchExists) {
        await Match.create(matchInfo)
        console.log('created match!')
      } else if (matchExists) {
        console.log('match exists!')
      }
    } else {
      console.log('match not created!')
    }
    console.log(newLike)
    res.json(newLike)
  } catch (err) {
    next(err)
  }
})

// router.get('/pastry', async (req, res, next) => {
//   try {
//     const pastry = await Product.findAll({
//       where: {
//         productType: 'pastry'
//       }
//     })
//     res.json(pastry)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/beverage', async (req, res, next) => {
//   try {
//     const pastry = await Product.findAll({
//       where: {
//         productType: 'beverage'
//       }
//     })
//     res.json(pastry)
//   } catch (err) {
//     next(err)
//   }
// })

// // delete /api/products/:productid
// router.delete('/:id', permit(['admin']), async (req, res, next) => {
//   try {
//     const id = req.params.id
//     await Product.destroy({where: {id}})
//     res.sendStatus(204)
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:id', permit(['admin']), async (req, res, next) => {
//   try {
//     const productToUpdate = await Product.findByPk(req.params.id)
//     if (!productToUpdate) {
//       const err = Error('product does not exist')
//       err.status = 409
//       throw err
//     }
//     if (productToUpdate) {
//       await productToUpdate.update({
//         name: req.body.name,
//         price: req.body.price,
//         description: req.body.description
//       })
//       res.json(productToUpdate)
//     }
//   } catch (error) {
//     next(error)
//   }
// })
