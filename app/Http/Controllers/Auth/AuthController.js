'use strict'

const Logger = use('Logger')

class AuthController {
    constructor() {
        // protected
        this.userService = use('FreeCar/Core/UserService');
    }

    async login({ request, auth }) {
        let { email, password } = request.all();

        Logger.info(`${email} logging in...`);
        return await auth.withRefreshToken().attempt(email, password);
    }

    async register({ request, auth }) {
        let user = await this.userService.create(request.all());

        Logger.info(`Registering new User ${request.all().email}...`);
        return await auth.withRefreshToken().generate(user);
    }
}

module.exports = AuthController
