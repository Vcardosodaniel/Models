'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('pedidovenda', {
			ID: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			ORDER_CODE: {
				type: Sequelize.INTEGER
			},
			CLIENT: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			CONFIRMED: {
				type: Sequelize.INTEGER
			},
			SELLER: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			ESTIMATE_DATE: {
				type: Sequelize.DATE,
				allowNull: false
			},
			VALIDATE_DATE: {
				type: Sequelize.DATE
			},
			DISCOUNT: {
				type: Sequelize.DOUBLE
			},
			FISCAL_DOC: {
				type: Sequelize.INTEGER
			},
			DOC_TYPE: {
				type: Sequelize.STRING
			},
			OBS: {
				type: Sequelize.BLOB
			},
			PED_ORC: {
				type: Sequelize.INTEGER
			},
			TOTAL: {
				type: Sequelize.DOUBLE
			},
			IMPRESSED: {
				type: Sequelize.TEXT('tiny')
			},
			CLIENT_NAME: {
				type: Sequelize.STRING
			},
			CLOSED: {
				type: Sequelize.TEXT('tiny')
			},
			DELIVERY_DATA: {
				type: Sequelize.DATE
			}, 
			PAYMENT_FORM: {
				type: Sequelize.TEXT('tiny')
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('pedidovenda');
	}
};