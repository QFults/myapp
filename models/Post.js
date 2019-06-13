module.exports = (Schema, model) => {
  const Post = new Schema({
    title: String,
    body: String
  })

  return model('Post', Post)
}
