'use strict'
const User = use ('App/Models/User');

class AuthController {
    async login({ request, auth }) {
        let { email, password } = request.all();

        return await auth.attempt(email, password);
    }

    async register({ request }) {
        
    }

    generatePassword() {

    }
}

module.exports = AuthLoginController
