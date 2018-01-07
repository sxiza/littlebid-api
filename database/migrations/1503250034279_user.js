'use strict'

const Schema = use('Schema');

class UserSchema extends Schema {
  up () {
    this.createIfNotExists('users', table => {
      table.increments();
      table.string('name', 255).notNullable();
      table.string('surname', 255).notNullable();
      table.string('email', 511).notNullable().unique();
      table.string('phone_country_code', 10);
      table.string('phone', 100);
      table.unique(['phone_country_code', 'phone']);
      table.string('password', 60).notNullable();
      table.timestamp('deleted_at');
      table.timestamps();
    });
  }

  down () {
    this.dropTableIfExists('users');
  }
}

module.exports = UserSchema
