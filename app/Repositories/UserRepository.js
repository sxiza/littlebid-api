'use strict'

class UserRepository {
    async create(data) {
        let { name, surname, email } = data;

        return await User.create({ name, surname, email });
    }
}