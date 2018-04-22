'use strict'

const Schema = use('Schema')

class TokensSchema extends Schema {
	async up () {
		let exists = await this.hasTable('tokens');

		if (!exists)
			this.createTable('tokens', table => {
				table.increments();
				table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
				table.string('token', 40).notNullable().unique();
				table.string('type', 80).notNullable();
				table.boolean('is_revoked').defaultTo(false);
				table.timestamps();
			});
	}

	async down () {
		let exists = await this.hasTable('users');

		if (exists)
			this.dropTable('tokens');
	}
}

module.exports = TokensSchema
