const router = require('express').Router()
const {Like, Movie, User} = require('../db/models')
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

// // /post /api/products
// router.post('/', permit(['admin']), async (req, res, next) => {
//   try {
//     const newProduct = await Product.create(req.body)
//     res.json(newProduct)
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
