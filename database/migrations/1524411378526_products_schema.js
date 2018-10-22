'use strict'

const Schema = use('Schema')

class ProductsSchema extends Schema {
	up () {
		let exists = await this.hasTable('products');

		if (!exists)
			this.create('products', (table) => {
				table.increments();
				table.string('title', 255);
				table.string('description', 1023);
				table.decimal('price');
				table.decimal('max_price');
				table.timestamp('expires_at');
				table.string('slug', 255);
				table.timestamps();
			});
	}

	down () {
		let exists = await this.hasTable('products');

		if (exists)
			this.drop('products');
	}
}

module.exports = ProductsSchema
