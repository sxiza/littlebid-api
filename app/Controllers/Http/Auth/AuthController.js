'use strict'

const UserRepository = use('App/Repositories/UserRepository')

class AuthController {
    constructor() {
        // protected
        this.users = new UserRepository();
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
