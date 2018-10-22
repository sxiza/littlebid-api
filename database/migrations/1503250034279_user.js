'use strict'

const Schema = use('Schema');

class UserSchema extends Schema {
	async up () {
		let exists = await this.hasTable('users');

		if (!exists)
			this.create('users', table => {
				table.increments();
				table.string('name', 255).notNullable();
				table.string('surname', 255).notNullable();
				table.string('email', 511).notNullable().unique();
				table.string('password', 60).notNullable();
				table.timestamp('deleted_at').nullable().default(null);
				table.timestamps();
			});
	}

	async down () {
		let exists = await this.hasTable('users');

		if (exists)
			this.drop('users');
	}
}

module.exports = UserSchema
