'use strict'

class CreateUser {
	get rules () {
		return {
			email: 'required|email|unique:users,email',
			name: 'required|string|max:255',
			surname: 'required|string|max:255',
			password: 'required|min:8|confirmed'
		}
	}

	get sanitizationRules () {
		return {
			email: 'normalize_email'
		}
	}
}

module.exports = CreateUser
