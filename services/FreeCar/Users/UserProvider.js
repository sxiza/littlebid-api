'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const UserService = require('./UserService')

class UserProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('FreeCar/Core/UserService', () => {
			return new UserService();
		})
	}

	boot () {
		
	}
}

module.exports = UserProvider