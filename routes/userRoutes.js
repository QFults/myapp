const { User } = require('../models')

module.exports = app => {
  // GET all users
  app.get('/users', (req, res) => {
    User.find({}, (e, users) => {
      if (e) throw e
      res.json(users)
    })
  })
}