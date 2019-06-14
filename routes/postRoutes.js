const { Post, User } = require('../models')

module.exports = app => {
  // GET all posts
  app.get('/posts', (req, res) => {
    Post.find({})
      .populate('author')
      .then(posts => res.json(posts))
      .catch(e => console.log(e))
  })

  // POST a post
  app.post('/posts', (req, res) => {
    Post.create(req.body)
      .then(({ _id }) => {
        User.findByIdAndUpdate(req.body.author, { $push: { posts: _id } })
          .then(_ => res.sendStatus(200))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })
}
