'use strict';
module.exports = function(sequelize, DataTypes){
	var pedidovenda = sequelize.define ('pedidovenda', {

		ID: {
			type: Sequelize.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			allowNull: false
		},

		ORDER_CODE: {
			type: Sequelize.INTEGER,
			field: 'CODIGOCOMANDA'
		},

		CLIENT: {
			type: Sequelize.INTEGER,
			field: 'CLIENTE',
			allowNull: false
		},

		CONFIRMED: {
			type: Sequelize.INTEGER,
			field: 'CONFIRMADO'
		},

		SELLER: {
			type: Sequelize.INTEGER,
			field: 'VENDEDOR',
			allowNull: false
		},

		ESTIMATE_DATE: {
			type: Sequelize.DATE,
			field: 'DATAORCAMENTO',
			allowNull: false
		},

		VALIDATE_DATE: {
			type: Sequelize.DATE,
			field: 'DATAVALIDADE'
		},

		DISCOUNT: {
			type: Sequelize.DOUBLE,
			field: 'DESCONTO'
		},

		FISCAL_DOC: {
			type: Sequelize.INTEGER,
			field: 'DOCFISCAL'
		},

		DOC_TYPE: {
			type: Sequelize.STRING,
			field: 'TIPODOC'
		},

		OBS: {
			type: Sequelize.BLOB,
			field: 'OBSERVACAO'
		},

		PED_ORC: {
			type: Sequelize.INTEGER,
			field: 'PED_ORC'
		},

		TOTAL: {
			type: Sequelize.DOUBLE,
			field: 'TOTAL'
		},

		IMPRESSED: {
			type: Sequelize.TEXT('tiny'),
			field: 'IMPRESSO'
		},

		CLIENT_NAME: {
			type: Sequelize.STRING,
			field: 'CLIENTE_NOME'
		},

		CLOSED: {
			type: Sequelize.TEXT('tiny'),
			field: 'FECHADO'
		},

		DELIVERY_DATA: {
			type: Sequelize.DATE,
			field: 'DATA_ENTREGA'
		}, 

		PAYMENT_FORM: {
			type: Sequelize.TEXT('tiny'),
			field: 'FORMA_PAGAMENTO'
		}
	}, {
		freezeTableName: true
		}
	);
	return pedidovenda;
};