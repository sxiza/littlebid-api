'use strict'

const User = use('FreeCar/Models/User')

class UserRepository {
    async create(data) {
        let { name, surname, email } = data;

        return await User.create({ name, surname, email });
    }
}

module.exports = UserRepository