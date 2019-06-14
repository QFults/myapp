const { Post } = require('../models')

module.exports = app => {
  // GET all posts
  app.get('/posts', (req, res) => {
    Post.find({}, (e, posts) => {
      if (e) throw e
      res.json(posts)
    })
  })

  // POST a post
  app.post('/posts', (req, res) => {
    Post.create(req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
}
