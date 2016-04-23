'use strict';
module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.createTable('product_stock', {
			id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		cest_code: {
			type: DataTypes.INTEGER
		},
		bar_code: {
			type: DataTypes.INTEGER
		},
		description: {
			type: DataTypes.STRING
		},
		provider: {
			type: DataTypes.INTEGER
		},
		classification: {
			type: DataTypes.INTEGER
		},
		department: {
			type: DataTypes.INTEGER
		},
		sub_group: {
			type: DataTypes.INTEGER
		},
		group: {
			type: DataTypes.INTEGER
		},
		buy_med: {
			type: DataTypes.STRING
		},
		register_date: {
			type: DataTypes.DATE
		},
		location: {
			type: DataTypes.STRING
		},
		weight: {
			type: DataTypes.DOUBLE
		},
		commission: {
			type: DataTypes.FLOAT
		}, 
		gross_profit: {
			type: DataTypes.FLOAT
		},
		obs: {
			type: DataTypes.BLOB
		},
		produce_type: {
			type: DataTypes.STRING
		},
		item_type: {
			type: DataTypes.STRING
		},
		origin: {
			type: DataTypes.INTEGER
		},
		cst_csosn: {
			type: DataTypes.INTEGER
		},
		cst_ipi: {
			type: DataTypes.INTEGER
		},
		ipi_value: {
			type: DataTypes.DOUBLE
		},
		ipi_percentage: {
			type: DataTypes.FLOAT
		},
		nat_op_ent: {
			type: DataTypes.INTEGER
		},
		nat_op_out: {
			type: DataTypes.INTEGER
		},
		ncm: {
			type: DataTypes.INTEGER
		},
		cst_pis_cofins_entry: {
			type: DataTypes.INTEGER
		},
		pis_entry: {
			type: DataTypes.DOUBLE
		},
		cofins_entry: {
			type: DataTypes.DOUBLE
		},
		cst_pis_cofins_out: {
			type: DataTypes.INTEGER
		},
		pis_out: {
			type: DataTypes.DOUBLE
		},
		cofins_out: {
			type: DataTypes.DOUBLE
		},
		icms: {
			type: DataTypes.INTEGER
		},
		weighable: {
			type: DataTypes.STRING
		},
		measurement: {
			type: DataTypes.STRING
		},
		cod_tech_record: {
			type: DataTypes.INTEGER
		},
		cod_kit: {
			type: DataTypes.INTEGER
		},
		photo: {
			type: DataTypes.STRING
		},
		lot_control:{
			type: DataTypes.STRING
		},
		serial_control: {
			type: DataTypes.INTEGER
		},
		grid_control: {
			type: DataTypes.INTEGER
		},
		mva: {
			type: DataTypes.DOUBLE
		},
		cean_trib: {
			type: DataTypes.STRING
		},
		cfop_nfce_out: {
			type: DataTypes.INTEGER
		},
		unity_fact: {
			type: DataTypes.DOUBLE
		},
		genre_cod: {
			type: DataTypes.INTEGER
		},
		lst: {
			type: DataTypes.STRING
		},
		sector_cod: {
			type: DataTypes.INTEGER
		},
		recipe: {
			type: DataTypes.BLOB
		},
		price_cod: {
			type: DataTypes.INTEGER
		},
		sell_projection: {
			type: DataTypes.DOUBLE
		},
		nutritional_cod: {
			type: DataTypes.STRING
		},
		iat: {
			type: DataTypes.TEXT('tiny')
		},
		ippt: {
			type: DataTypes.TEXT('tiny')
		},
		irrf: {
			type: DataTypes.DOUBLE
		},
		iss: {
			type: DataTypes.DOUBLE
		},
		csll: {
			type: DataTypes.DOUBLE
		},
		monophase: {
			type: DataTypes.INTEGER
		},
		measurement_cod: {
			type: DataTypes.INTEGER
		},
		measurement_buy_cod: {
			type: DataTypes.INTEGER
		},
		qtd:{
			type: DataTypes.DOUBLE
		},
		sell_price: {
			type: DataTypes.DOUBLE
		},
		term_sell_price: {
			type: DataTypes.DOUBLE
		},
		reference: {
			type: DataTypes.STRING
		},
		buy_price: {
			type: DataTypes.DOUBLE
		},
		cost_price: {
			type: DataTypes.DOUBLE
		},
		last_buy: {
			type: DataTypes.DATE
		},
		last_sell: {
			type: DataTypes.DATE
		},
		middle_cost: {
			type: DataTypes.DOUBLE
		}, 
		qtd_initial: {
			type: DataTypes.DOUBLE
		},
		anp: {
			type: DataTypes.INTEGER
		},
		active: {
			type: DataTypes.INTEGER
		},
		actual_date:{
			type: DataTypes.DATE
		}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('product_stock');
	}
};