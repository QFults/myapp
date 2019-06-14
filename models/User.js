module.exports = (Schema, model) => {
  const User = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }]
  })

  return model('User', User)
}
