const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//get all users
//localhost:8080/api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/addFriend/:id', async (req, res, next) => {
  try {
    const userToUpdate = await User.findByPk(req.params.id)
    const friendToAdd = await User.findOne({where: {email: req.body.email}})
    if (!userToUpdate) {
      const err = Error('user does not exist')
      err.status = 409
      throw err
    }
    if (userToUpdate) {
      await userToUpdate.update({
        friendId: friendToAdd.id
      })
      await friendToAdd.update({
        friendId: userToUpdate.id
      })
    }
    res.json(friendToAdd)
  } catch (error) {
    next(error)
  }
})
