'use strict'

const Logger = use('Logger')
const { validateAll } = use('Validator')
const RegisterUser = use('LittleBid/Api/Validators/RegisterUser')

class AuthController {
    constructor() {
        // protected
        this.userService = use('LittleBid/Core/UserService');
    }

    async login({ request, auth }) {
        let { email, password } = request.all();

        Logger.info(`${email} logging in...`);
        return await auth.withRefreshToken().attempt(email, password);
    }

    async register({ request, auth, response }) {
        let user = await this.userService.create(request.all());

        return await auth.withRefreshToken().generate(user);
    }
}

module.exports = AuthController
