'use strict'

const User = use('FreeCar/Models/User')
const Logger = use('Logger')

class UserRepository {
    async create(data) {
        let { name, surname, email, password } = data;

        return await User.create({ name, surname, email, password });
    }
}

module.exports = UserRepository