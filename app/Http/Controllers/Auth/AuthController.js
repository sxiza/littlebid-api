'use strict'

const Logger = use('Logger')

class AuthController {
    constructor() {
        // protected
        this.userService = use('FreeCar/Core/UserService');
    }

    async login({ request, auth }) {
        let { email, password } = request.all();

        return await auth.withRefreshToken().attempt(email, password);
    }

    async register({ request, auth }) {
        Logger.debug(request.all());
        let user = await this.userService.create(request.all());

        return await auth.withRefreshToken().generate(user);
    }
}

module.exports = AuthController
