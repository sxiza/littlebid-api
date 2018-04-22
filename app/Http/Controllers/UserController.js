'use strict'

const Logger = use('Logger')

class UserController {
    constructor() {
        // protected
        this.userService = use('LittleBid/Core/UserService');
    }

    self({ auth }) {
        return auth.user;
    }

    async getRandom({ auth }) {
        Logger.info(`${auth.user.email} retrieving random User`);
        return await this.userService.getRandom();
    }
}

module.exports = UserController
