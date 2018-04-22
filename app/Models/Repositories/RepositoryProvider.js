'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class RepositoryProvider extends ServiceProvider {
	register () {
		// register bindings
		this.app.singleton('LittleBid/Models/UserRepository', () => {
			return new (require('./UserRepository'));
		})
	}

	boot () {
		
	}
}

module.exports = RepositoryProvider