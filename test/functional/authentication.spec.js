'use strict'

const { test, trait } = use('Test/Suite')('Authentication')
const Chance = use('chance')

trait('Test/ApiClient')

test('Register a user', async ({ client, assert }) => {
	// Instantiate Chance so it can be used
	var chance = new Chance();

	let response = await client.post('/auth/register')
							.field('name', chance.first())
							.field('surname', chance.last())
							.field('email', chance.email())
							.field('password', "Password")
							.field('password_confirm', "Password")
							.end();

	response.assertStatus(200);
	response.assertJSONSubset({
		type: 'bearer'
	});
});

test('Login a user', async ({ client, assert }) => {
	let userService = use('FreeCar/Core/UserService');
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