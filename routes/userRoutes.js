const { User } = require('../models')

module.exports = app => {
  // GET all users
  app.get('/users', (req, res) => {
    User.find({})
      .populate('posts')
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })

  // POST a user
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
