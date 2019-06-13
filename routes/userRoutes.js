const { User } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = app => {
  // Register A User
  app.post('/users', (req, res) => {
    User.register(new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username
    }), req.body.password, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })

  app.get('/login/:username/:password', (req, res) => {
    User.authenticate()(req.params.username, req.params.password, (e, user) => {
      if (e) throw e
      res.json({
        user: user.username,
        token: jwt.sign({ id: user._id }, 'hotdog')
      })
    })
  })
}