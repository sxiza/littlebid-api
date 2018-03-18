'use strict'

const { test, trait } = use('Test/Suite')('Authentication')
const Chance = require('chance');
const Logger = use('Logger')

trait('Test/ApiClient')

test('register a user', async ({ client, assert }) => {
	// Instantiate Chance so it can be used
	var chance = new Chance();

	let response = await client.post('/auth/register')
							.field('name', chance.first())
							.field('surname', chance.last())
							.field('email', chance.email())
							.field('password', "Password")
							.field('password_confirm', "Password")
							.end();
		console.log(response.body);
	  response.assertStatus(200);
	  assert.include(response.body, "bearer", "It seems like there is a bearer token.");
});