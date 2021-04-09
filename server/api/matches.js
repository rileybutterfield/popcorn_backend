const router = require('express').Router()
const {Match, User, Movie} = require('../db/models')
module.exports = router

const {Op} = require('sequelize')
//GET /api/matches/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const userData = await User.findByPk(req.params.userId)
    const user = userData.dataValues
    const friendData = await User.findByPk(user.friendId)
    const friend = friendData.dataValues
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
