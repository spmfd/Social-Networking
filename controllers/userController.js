const { User } = require('../models')

module.exports = {
    createUser(req, res) {
        User.create(req.body)
    }


}