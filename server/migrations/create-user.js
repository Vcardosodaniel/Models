'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('user', {
			id: {
			type: DataTypes.INTEGER
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		user_name: {
			type: DataTypes.STRING
		},
		group: {
			type: DataTypes.INTEGER
		},
		password: {
			type: DataTypes.STRING
			allowNull: false
		},
		seller: {
			type: DataTypes.STRING
		},
		technician: {
			type: DataTypes.STRING
		},
		company_cod: {
			type: DataTypes.INTEGER
		},
		active: {
			type: DataTypes.INTEGER
			allowNull: false
		},
		user_login: {
			type: DataTypes.STRING
			allowNull: false
		},
		email: {
			type: DataTypes.STRING
		},
		service_commission: {
			type: DataTypes.FLOAT
		},
		sales_comission: {
			type: DataTypes.FLOAT
		},
		change_password: {
			type: DataTypes.INTEGER
		},
		dav: {
			type: DataTypes.INTEGER
		},
		pre_sale: {
			type: DataTypes.INTEGER
		},
		front: {
			type: DataTypes.INTEGER
		},
		actual_datetime: {
			type: DataTypes.DATE
		},
		discount_limit: {
			type: DataTypes.DOUBLE
		},
		discount: {
			type: DataTypes.TEXT('tiny')
		}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('user');
	}
};