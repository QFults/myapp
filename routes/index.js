module.exports = app => {
  require('./userRoutes.js')(app)
  require('./postRoutes')(app)
}
