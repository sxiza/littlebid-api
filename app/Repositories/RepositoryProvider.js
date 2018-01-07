const { ServiceProvider } = require('@adonisjs/fold')
const UserRepository = require('App/Repositories/UserRepository')

class RepositoryProvider extends ServiceProvider {
  register () {
    // register bindings
    this.app.singleton('FreeCar/UserRepository', () => {
    	return new UserRepository();
    })
  }

  boot () {
    // optionally do some intial setup
  }
}

module.exports = RepositoryProvider