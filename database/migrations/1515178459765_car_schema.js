'use strict'

const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('status').notNullable();
      table.string('make', 100);
      table.string('model', 1000);
      table.integer('year');
      table.decimal('price_per_hour');
      table.timestamps();
    })
  }

  down () {
    this.dropTableIfExists('cars');
  }
}

module.exports = CarSchema
