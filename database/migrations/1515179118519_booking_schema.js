'use strict'

const Schema = use('Schema');

class BookingSchema extends Schema {
  up () {
    this.createIfNotExists('bookings', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
      table.integer('car_id').unsigned().references('id').inTable('cars').notNullable();
      table.integer('type').notNullable();
      table.integer('status').notNullable();
      table.dateTime('start').notNullable();
      table.dateTime('end').notNullable();
      table.string('reason', 1000).notNullable();
      table.timestamps();
    });
  }

  down () {
    this.dropTableIfExists('bookings');
  }
}

module.exports = BookingSchema
