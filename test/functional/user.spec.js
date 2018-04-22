'use strict'

const { test, trait } = use('Test/Suite')('User')
const Logger = use('Logger')

trait('Test/ApiClient')
trait('Auth/Client')

test('Retrieve current user', async ({ client, assert }) => {
	let userService = use('LittleBid/Core/UserService');
	let user = await userService.getRandom();
	
	let response = await client.get('/user/self')
							.loginVia(user)
							.end();
	response.assertJSONSubset({
		name: user.name,
		surname: user.surname,
		email: user.email
	});
})
