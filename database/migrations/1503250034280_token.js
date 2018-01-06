'use strict'

const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.createIfNotExists('tokens', table => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
      table.string('token', 40).notNullable().unique();
      table.string('type', 80).notNullable();
      table.boolean('is_revoked').defaultTo(false);
      table.timestamps();
    });
  }

  down () {
    this.dropTableIfExists('tokens');
  }
}

module.exports = TokensSchema;
