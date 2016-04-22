'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('itenspedidovenda', {
			ID: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			ORDER_NUM: {
				type: Sequelize.INTEGER
			},
			PRODUCT: {
				type: Sequelize.INTEGER
			},
			QUANTITY: {
				type: Sequelize.DOUBLE
			},
			AMOUNT: {
				type: Sequelize.DOUBLE
			},
			PAYMENT_TERM: {
				type: Sequelize.DOUBLE
			},
			IN_CASH: {
				type: Sequelize.DOUBLE
			},
			DISCOUNT: {
				type: Sequelize.DOUBLE
			},
			DISCOUNT_TERM: {
				type: Sequelize.DOUBLE
			},
			DISCOUNT_IN_CASH: {
				type: Sequelize.DOUBLE
			},
			CANCELED: {
				type: Sequelize.TEXT('tiny')
			},
			INCLUSION_DATE: {
				type: Sequelize.DATE
			},
			ALIQUOT_TYPE: {
				type: Sequelize.STRING
			},
			ALIQUOT_VALUE: {
				type: Sequelize.DOUBLE
			},
			ALIQUOT_INDEX: {
				type: Sequelize.INTEGER
			},
			PRODUCT_DESC: {
				type: Sequelize.STRING
			},
			UNITY: {
				type: Sequelize.STRING
			},
			USER_CANC: {
				type: Sequelize.INTEGER,
			},
			USER_ENTRY: {
				type: Sequelize.INTEGER
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('itenspedidovenda');
	}
};