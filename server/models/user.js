'use strict';
module.exports = function(sequelize, DataTypes){
	var user = sequelize.define ('user', {
		id: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			allowNull: false
		},
		user_name: {
			type: DataTypes.STRING,
			field: 'NOMEUSUARIO'
		},
		group: {
			type: DataTypes.INTEGER,
			field: 'GRUPO'
		},
		password: {
			type: DataTypes.STRING,
			field: 'SENHA',
			allowNull: false
		},
		seller: {
			type: DataTypes.STRING,
			field: 'VENDEDOR'
		},
		technician: {
			type: DataTypes.STRING,
			field: 'TECNICO'
		},
		company_cod: {
			type: DataTypes.INTEGER,
			field: 'CODEMPRESA'
		},
		active: {
			type: DataTypes.INTEGER,
			field: 'ATIVO',
			allowNull: false
		},
		user_login: {
			type: DataTypes.STRING,
			field: 'LOGINUSUARIO',
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			field: 'EMAIL'
		},
		service_commission: {
			type: DataTypes.FLOAT,
			field: 'COMISSAOSERVICOS'
		},
		sales_comission: {
			type: DataTypes.FLOAT,
			field: 'COMISSAOVENDAS'
		},
		change_password: {
			type: DataTypes.INTEGER,
			field: 'ALTEROU_SENHA'
		},
		dav: {
			type: DataTypes.INTEGER,
			field: 'DAV'
		},
		pre_sale: {
			type: DataTypes.INTEGER,
			field: 'PREVENDA'
		},
		front: {
			type: DataTypes.INTEGER,
			field: 'FRENTE'
		},
		actual_datetime: {
			type: DataTypes.DATE,
			field: 'DATAHORA_ATU'
		},
		discount_limit: {
			type: DataTypes.DOUBLE,
			field: 'LIMITEDESCONTO'
		},
		discount: {
			type: DataTypes.TEXT('tiny'),
			field: 'DESCONTO'
		}
	}, {
		freezeTableName: true
		}
	);
	return pedidovenda;
};