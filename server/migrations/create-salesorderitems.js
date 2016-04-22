'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('itenspedidovenda', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			order_num: {
				type: Sequelize.INTEGER
			},
			product: {
				type: Sequelize.INTEGER
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
			},
			user_entry: {
				type: Sequelize.INTEGER
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('itenspedidovenda');
	}
};