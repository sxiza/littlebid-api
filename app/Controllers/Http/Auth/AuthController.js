'use strict'

class AuthController {
    constructor() {
        // protected
        this.users = use('FreeCar/UserRepository');
    }

    async login({ request, auth }) {
        let { email, password } = request.all();

        return await auth.withRefreshToken().attempt(email, password);
    }

    async register({ request, auth }) {
        let user = await this.users.create(request.all());

        return await auth.withRefreshToken().generate(user);
    }
}

module.exports = AuthLoginController
