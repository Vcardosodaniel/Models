'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('salesorderitems', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			order_num: {
				type: Sequelize.INTEGER,
				references: {
					model: 'salesorder',
					key: 'id'
				}
			},
			product: {
				type: Sequelize.INTEGER,
				references: {
					model: 'product_stock',
					key: 'id'
				}
			},
			quantity: {
				type: Sequelize.DOUBLE
			},
			amount: {
				type: Sequelize.DOUBLE
			},
			payment_term: {
				type: Sequelize.DOUBLE
			},
			in_cash: {
				type: Sequelize.DOUBLE
			},
			discount: {
				type: Sequelize.DOUBLE
			},
			discount_term: {
				type: Sequelize.DOUBLE
			},
			discount_in_cash: {
				type: Sequelize.DOUBLE
			},
			canceled: {
				type: Sequelize.TEXT('tiny')
			},
			inclusion_date: {
				type: Sequelize.DATE
			},
			aliquot_type: {
				type: Sequelize.STRING
			},
			aliquot_value: {
				type: Sequelize.DOUBLE
			},
			aliquot_index: {
				type: Sequelize.INTEGER
			},
			product_desc: {
				type: Sequelize.STRING
			},
			unity: {
				type: Sequelize.STRING
			},
			user_canc: {
				type: Sequelize.INTEGER,
				references: {
					model: 'user',
					key: 'id'
				}
			},
			user_entry: {
				type: Sequelize.INTEGER,
				references: {
					model: 'user',
					key: 'id'
				}
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('salesorderitems');
	}
};