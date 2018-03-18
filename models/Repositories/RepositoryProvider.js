'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const UserRepository = require('./UserRepository')

class RepositoryProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('FreeCar/Models/UserRepository', () => {
			return new UserRepository();
		})
	}

	boot () {
		
	}
}

module.exports = RepositoryProvider