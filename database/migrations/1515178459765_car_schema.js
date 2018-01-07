'use strict'

const Schema = use('Schema');

class CarSchema extends Schema {
  up () {
    this.createIfNotExists('cars', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
      table.integer('status').notNullable();
      table.string('make', 255).notNullable();
      table.string('model', 255).notNullable();
      table.integer('year').notNullable();
      table.decimal('price_per_hour').notNullable();
      table.timestamp('deleted_at');
      table.timestamps();
    });
  }

  down () {
    this.dropTableIfExists('cars');
  }
}

module.exports = CarSchema
