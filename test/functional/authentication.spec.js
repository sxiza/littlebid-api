'use strict'

const { test, trait } = use('Test/Suite')('Authentication')
const Factory = use('Factory')

trait('Test/ApiClient')

test('Register a user', async ({ client, assert }) => {
	let user = await Factory.model('LittleBid/Models/User').make();
	
	let response = await client.post('/auth/register')
							.field('name', user.name)
							.field('surname', user.surname)
							.field('email', user.email)
							.field('password', "Password")
							.field('password_confirmation', "Password")
							.end();
	
	response.assertStatus(200);
	response.assertJSONSubset({
		type: 'bearer'
	});
});

test('Login a user', async ({ client, assert }) => {
	let userService = use('LittleBid/Core/UserService');
	let user = await userService.getRandom();
	
	let response = await client.post('/auth/login')
						.field('email', user.email)
						.field('password', "Password")
						.end();
	
	response.assertStatus(200);
	response.assertJSONSubset({
		type: 'bearer'
	});
});