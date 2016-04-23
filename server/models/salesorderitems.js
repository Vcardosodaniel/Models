'use strict';
module.exports = function(sequelize, DataTypes){
	var salesorderitems = sequelize.define('salesorderitems', {
		id: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			allowNull: false
		},
		order_num: {
			type: DataTypes.INTEGER,
			field: 'NUM_PEDIDO'
		},
		product: {
			type: DataTypes.INTEGER,
			field: 'PRODUTO'
		},
		quantity: {
			type: DataTypes.DOUBLE,
			field: 'QUANTIDADE'
		},
		amount: {
			type: DataTypes.DOUBLE,
			field: 'VALOR'
		},
		payment_term: {
			type: DataTypes.DOUBLE,
			field: 'VALORPRAZO'
		},
		in_cash: {
			type: DataTypes.DOUBLE,
			field: 'VALORVISTA'
		},
		discount: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTO'
		},
		discount_term: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTOPRAZO'
		},
		discount_in_cash: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTOVISTA'
		},
		canceled: {
			type: DataTypes.TEXT('tiny'),
			field: 'CANCELADO'
		},
		inclusion_time: {
			type: DataTypes.DATE,
			field: 'DT_INCLUSAO'
		},
		aliquot_type: {
			type: DataTypes.STRING,
			field: 'ALIQUOTA_TIPO'
		},
		aliquot_value: {
			type: DataTypes.DOUBLE,
			field: 'ALIQUOTA_VALOR'
		},
		aliquot_index: {
			type: DataTypes.INTEGER,
			field: 'ALIQUOTA_INDICE'
		},
		product_desc: {
			type: DataTypes.STRING,
			field: 'PRODUTO_DESCRICAO'
		},
		unity: {
			type: DataTypes.STRING,
			field: 'UNIDADE'
		},
		user_canc: {
			type: DataTypes.INTEGER,
			field: 'USUARIO_CANC'
		},
		user_entry: {
			type: DataTypes.INTEGER,
			field: 'USUARIO_LANC'
		}
	}, {
		freezeTableName: true
		}
	);
}