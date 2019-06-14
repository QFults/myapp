module.exports = app => {
  require('./postRoutes.js')(app)
  require('./userRoutes.js')(app)
}
