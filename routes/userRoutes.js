const { User } = require('../models')

module.exports = app => {
  // GET all users
  app.get('/users', (req, res) => {
    User.find({}, (e, users) => {
      if (e) throw e
      res.json(users)
    })
  })

  // POST a user
  app.post('/users', (req, res) => {
    User.create(req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
}
