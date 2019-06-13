const { Schema, model } = require('mongoose')

const db = {
  User: require('./User.js')(Schema, model),
  Post: require('./Post.js')(Schema, model)
}

module.exports = db
