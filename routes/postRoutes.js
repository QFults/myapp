const { Post } = require('../models')

module.exports = app => {
  // GET all posts
  app.get('/posts', (req, res) => {
    Post.find({}, (e, posts) => {
      if (e) throw e
      res.json(posts)
    })
  })
}
