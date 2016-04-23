'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('salesorder', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			order_code: {
				type: Sequelize.INTEGER
			},
			client: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'client',
					key: 'id'
				}
			},
			confirmed: {
				type: Sequelize.INTEGER
			},
			seller: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'user',
					key: 'id'
				}
			},
			estimate_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			validate_date: {
				type: Sequelize.DATE
			},
			discount: {
				type: Sequelize.DOUBLE
			},
			fiscal_doc: {
				type: Sequelize.INTEGER
			},
			doc_type: {
				type: Sequelize.STRING
			},
			obs: {
				type: Sequelize.BLOB
			},
			ped_orc: {
				type: Sequelize.INTEGER
			},
			total: {
				type: Sequelize.DOUBLE
			},
			impressed: {
				type: Sequelize.TEXT('tiny')
			},
			client_name: {
				type: Sequelize.STRING
			},
			closed: {
				type: Sequelize.TEXT('tiny')
			},
			delivery_date: {
				type: Sequelize.DATE
			}, 
			payment_form: {
				type: Sequelize.TEXT('tiny')
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('salesorder');
	}
};