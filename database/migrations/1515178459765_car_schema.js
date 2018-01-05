'use strict'

const Schema = use('Schema');

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('status').notNullable();
      table.string('make', 100).notNullable();
      table.string('model', 1000).notNullable();
      table.integer('year').notNullable();
      table.decimal('price_per_hour').notNullable();
      table.timestamps();
    });
  }

  down () {
    this.dropTableIfExists('cars');
  }
}

module.exports = CarSchema;
