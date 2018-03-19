'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class UserProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('FreeCar/Core/UserService', () => {
			return new (require('./UserService'));
		})
	}

	boot () {
		
	}
}

module.exports = UserProvider