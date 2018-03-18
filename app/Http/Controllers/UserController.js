'use strict'

class UserController {
    self({ auth }) {
        return auth.user;
    }
}

module.exports = UserController
