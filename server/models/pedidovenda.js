'use strict';
module.exports = function(sequelize, DataTypes){
	var pedidovenda = sequelize.define ('pedidovenda', {
		ID: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			allowNull: false
		},
		ORDER_CODE: {
			type: DataTypes.INTEGER,
			field: 'CODIGOCOMANDA'
		},
		CLIENT: {
			type: DataTypes.INTEGER,
			field: 'CLIENTE',
			allowNull: false
		},
		CONFIRMED: {
			type: DataTypes.INTEGER,
			field: 'CONFIRMADO'
		},
		SELLER: {
			type: DataTypes.INTEGER,
			field: 'VENDEDOR',
			allowNull: false
		},
		ESTIMATE_DATE: {
			type: DataTypes.DATE,
			field: 'DATAORCAMENTO',
			allowNull: false
		},
		VALIDATE_DATE: {
			type: DataTypes.DATE,
			field: 'DATAVALIDADE'
		},
		DISCOUNT: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTO'
		},
		FISCAL_DOC: {
			type: DataTypes.INTEGER,
			field: 'DOCFISCAL'
		},
		DOC_TYPE: {
			type: DataTypes.STRING,
			field: 'TIPODOC'
		},
		OBS: {
			type: DataTypes.BLOB,
			field: 'OBSERVACAO'
		},
		PED_ORC: {
			type: DataTypes.INTEGER,
			field: 'PED_ORC'
		},
		TOTAL: {
			type: DataTypes.DOUBLE,
			field: 'TOTAL'
		},
		IMPRESSED: {
			type: DataTypes.TEXT('tiny'),
			field: 'IMPRESSO'
		},
		CLIENT_NAME: {
			type: DataTypes.STRING,
			field: 'CLIENTE_NOME'
		},
		CLOSED: {
			type: DataTypes.TEXT('tiny'),
			field: 'FECHADO'
		},
		DELIVERY_DATA: {
			type: DataTypes.DATE,
			field: 'DATA_ENTREGA'
		}, 
		PAYMENT_FORM: {
			type: DataTypes.TEXT('tiny'),
			field: 'FORMA_PAGAMENTO'
		}
	}, {
		freezeTableName: true
		}
	);
	return pedidovenda;
};