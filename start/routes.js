'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
	return { greeting: 'Hello world in JSON Xanimal' }
})

Route.group(() => {
	Route.post('login', 'FreeCar/Api/Http/Controllers/Auth/AuthController.login').as('auth.login');
	Route.post('register', 'FreeCar/Api/Http/Controllers/Auth/AuthController.register')
		.validator('CreateUser')
		.as('auth.register');
}).prefix('auth');

Route.group(() => {
	Route.get('self', 'FreeCar/Api/Http/Controllers/UserController.self').as('user.self').middleware('auth');
	Route.get('random', 'FreeCar/Api/Http/Controllers/UserController.getRandom').as('user.get_random').middleware('auth');
}).prefix('user');
