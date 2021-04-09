const router = require('express').Router()
const {Match, User, Movie} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

//GET /api/matches/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    const friend = await User.findOne({
      where: {
        id: user.friendId
      }
    })

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
