const controllers = require('./controllers')

module.exports = router => {
    router.post('/api/user', controllers.create)
}