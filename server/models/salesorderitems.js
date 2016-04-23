'use strict';
module.exports = function(sequelize, DataTypes){
	var itenspedidovenda = sequelize.define('itenspedidovenda', {
		ID: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			allowNull: false
		},
		ORDER_NUM: {
			type: DataTypes.INTEGER,
			field: 'NUM_PEDIDO'
		},
		PRODUCT: {
			type: DataTypes.INTEGER,
			field: 'PRODUTO'
		},
		QUANTITY: {
			type: DataTypes.DOUBLE,
			field: 'QUANTIDADE'
		},
		AMOUNT: {
			type: DataTypes.DOUBLE,
			field: 'VALOR'
		},
		PAYMENT_TERM: {
			type: DataTypes.DOUBLE,
			field: 'VALORPRAZO'
		},
		IN_CASH: {
			type: DataTypes.DOUBLE,
			field: 'VALORVISTA'
		},
		DISCOUNT: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTO'
		},
		DISCOUNT_TERM: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTOPRAZO'
		},
		DISCOUNT_IN_CASH: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTOVISTA'
		},
		CANCELED: {
			type: DataTypes.TEXT('tiny'),
			field: 'CANCELADO'
		},
		INCLUSION_DATE: {
			type: DataTypes.DATE,
			field: 'DT_INCLUSAO'
		},
		ALIQUOT_TYPE: {
			type: DataTypes.STRING,
			field: 'ALIQUOTA_TIPO'
		},
		ALIQUOT_VALUE: {
			type: DataTypes.DOUBLE,
			field: 'ALIQUOTA_VALOR'
		},
		ALIQUOT_INDEX: {
			type: DataTypes.INTEGER,
			field: 'ALIQUOTA_INDICE'
		},
		PRODUCT_DESC: {
			type: DataTypes.STRING,
			field: 'PRODUTO_DESCRICAO'
		},
		UNITY: {
			type: DataTypes.STRING,
			field: 'UNIDADE'
		},
		USER_CANC: {
			type: DataTypes.INTEGER,
			field: 'USUARIO_CANC'
		},
		USER_ENTRY: {
			type: DataTypes.INTEGER,
			field: 'USUARIO_LANC'
		}
	}, {
		freezeTableName: true
		}
	);
}