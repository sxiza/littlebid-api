'use strict'

class UserService {
    constructor() {
        // protected
        this.users = use('FreeCar/Models/UserRepository');
    }

    async create(data) {
        return await this.users.create(data);
    }
}

module.exports = UserService