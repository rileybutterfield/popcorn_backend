const router = require('express').Router()
const {Match, User, Movie} = require('../db/models')
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
const {Op} = require('sequelize')
//GET /api/matches/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const userResult = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    const user = userResult.dataValues
    const friendResult = await User.findOne({
      where: {
        id: user.friendId
      }
    })
    const friend = friendResult.dataValues
    console.log(friend)
    const matches = await Match.findAll({
      where: {
        [Op.or]: [{userId: req.params.userId}, {userId: friend.id}]
      }
    })
    res.json(matches)
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
