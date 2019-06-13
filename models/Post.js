module.exports = (Schema, model) => {
  const Post = new Schema({
    title: {
      type: String
    },
    body: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  })

  return model('Post', Post)
}
