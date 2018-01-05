'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments();
      table.string('name', 1000).notNullable();
      table.string('surname', 1000).notNullable();
      table.string('email', 1000).notNullable().unique();
      table.string('phone_country_code', 10).nullable();
      table.string('phone', 100).nullable().unique();
      table.string('password', 60).notNullable();
      table.timestamps();
    });
  }

  down () {
    this.dropTableIfExists('users');
  }
}

module.exports = UserSchema
