module.exports = (Schema, model) => {
  const User = new Schema({
    name: String,
    email: String,
    username: String,
    password: String
  })

  return model('User', User)
}
