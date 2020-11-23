const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/movies', require('./movies'))
router.use('/likes', require('./likes'))
router.use('/matches', require('./matches'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
