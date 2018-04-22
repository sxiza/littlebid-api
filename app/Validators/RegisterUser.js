'use strict'

const { formatters } = use('Validator')

class RegisterUser {
	get formatter () {
		return formatters.JsonApi
	}

	get validateAll () {
		return true;
	}

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

module.exports = RegisterUser
