var itenspedidovenda = sequelize.define('itenspedidovenda', {

	ID: {
		type: Sequelize.INTEGER,
		field: 'CODIGO',
		primaryKey: true,
		allowNull: false
	},

	ORDER_NUM: {
		type: Sequelize.INTEGER,
		field: 'NUM_PEDIDO'
	},

	PRODUCT: {
		type: Sequelize.INTEGER,
		field: 'PRODUTO'
	},

	QUANTITY: {
		type: Sequelize.DOUBLE,
		field: 'QUANTIDADE'
	},

	AMOUNT: {
		type: Sequelize.DOUBLE,
		field: 'VALOR'
	},

	PAYMENT_TERM: {
		type: Sequelize.DOUBLE,
		field: 'VALORPRAZO'
	},

	IN_CASH: {
		type: Sequelize.DOUBLE,
		field: 'VALORVISTA'
	},

	DISCOUNT: {
		type: Sequelize.DOUBLE,
		field: 'DESCONTO'
	},

	DISCOUNT_TERM: {
		type: Sequelize.DOUBLE,
		field: 'DESCONTOPRAZO'
	},

	DISCOUNT_IN_CASH: {
		type: Sequelize.DOUBLE,
		field: 'DESCONTOVISTA'
	},

	CANCELED: {
		type: Sequelize.TEXT('tiny'),
		field: 'CANCELADO'
	},

	INCLUSION_DATE: {
		type: Sequelize.DATE,
		field: 'DT_INCLUSAO'
	},

	ALIQUOT_TYPE: {
		type: Sequelize.STRING,
		field: 'ALIQUOTA_TIPO'
	},

	ALIQUOT_VALUE: {
		type: Sequelize.DOUBLE,
		field: 'ALIQUOTA_VALOR'
	},

	ALIQUOT_INDEX: {
		type: Sequelize.INTEGER,
		field: 'ALIQUOTA_INDICE'
	},

	PRODUCT_DESC: {
		type: Sequelize.STRING,
		field: 'PRODUTO_DESCRICAO'
	},

	UNITY: {
		type: Sequelize.STRING,
		field: 'UNIDADE'
	},

	USER_CANC: {
		type: Sequelize.INTEGER,
		field: 'USUARIO_CANC'
	},

	USER_ENTRY: {
		type: Sequelize.INTEGER,
		field: 'USUARIO_LANC'
	}
}, {
	freezeTableName: true
	}
);