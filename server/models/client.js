'use strict';
module.exports = function(sequelize, DataTypes){
	var client = sequelize.define ('client', {
		id: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		client_type: {
			type: DataTypes.INTEGER,
			field: 'TIPO',
			allowNull: false
		},
		activity_type: {
			type: DataTypes.INTEGER,
			field: 'TIPOATIVIDADE'
		},
		name: {
			type: DataTypes.STRING,
			field: 'NOME'
		},
		fantasy: {
			type: DataTypes.STRING,
			field: 'FANTASIA'
		},
		contact: {
			type: DataTypes.STRING,
			field: 'CONTATO'
		},
		cgc: {
			type: DataTypes.STRING,
			field: 'CGC'
		},
		address: {
			type: DataTypes.STRING,
			field: 'ENDERECO'
		}, 
		number: {
			type: DataTypes.STRING,
			field: 'NUMERO'
		},
		neighborhood: {
			type: DataTypes.STRING,
			field: 'BAIRRO'
		},
		complement: {
			type: DataTypes.STRING,
			field: 'COMPLEMENTO'
		}, 
		cod_city: {
			type: DataTypes.INTEGER,
			field: 'CODCIDADE',
			allowNull: false
		},
		cep: {
			type: DataTypes.STRING,
			field: 'CEP'
		},
		phone: {
			type: DataTypes.STRING,
			field: 'FONE'
		},
		cellphone: {
			type: DataTypes.STRING,
			field: 'CELULAR'
		},
		email: {
			type: DataTypes.STRING,
			field: 'EMAIL'
		},
		credit_limit: {
			type: DataTypes.DOUBLE,
			field: 'LIMITECREDITO'
		},
		obs: {
			type: DataTypes.STRING,
			field: 'OBSERVACOES'
		},
		comercial_address: {
			type: DataTypes.STRING,
			field: 'ENDERECOCOMERCIAL'
		},
		comercial_neighborhood: {
			type: DataTypes.STRING,
			field: 'BAIRROCOMERCIAL'
		},
		comercial_complement: {
			type: DataTypes.STRING,
			field: 'COMPLEMENTOCOMERCIAL'
		},
		comercial_phone: {
			type: DataTypes.STRING,
			field: 'FONECOMERCIAL'
		},
		comercial_email: {
			type: DataTypes.STRING,
			field: 'EMAILCOMERCIAL'
		},
		comercial_number: {
			type: DataTypes.STRING,
			field: 'NUMEROCOMERCIAL'
		},
		collection_address: {
			type: DataTypes.STRING,
			field: 'ENDERECOCOMERCIAL'
		},
		collection_neighborhood: {
			type: DataTypes.STRING,
			field: 'BAIRROCOMERCIAL'
		},
		collection_complement: {
			type: DataTypes.STRING,
			field: 'COMPLEMENTOCOMERCIAL'
		},
		collection_phone: {
			type: DataTypes.STRING,
			field: 'FONECOMERCIAL'
		},
		collection_email: {
			type: DataTypes.STRING,
			field: 'EMAILCOMERCIAL'
		},
		collection_number: {
			type: DataTypes.STRING,
			field: 'NUMEROCOMERCIAL'
		},
		agreement: {
			type: DataTypes.INTEGER,
			field: 'CONVENIO'	
		},
		country: {
			type: DataTypes.INTEGER,
			field: 'PAIS'
		},
		active: {
			type: DataTypes.INTEGER,
			field: 'ATIVO'
		},
		last_but: {
			type: DataTypes.DATE,
			field: 'ULTIMACOMPRA'
		},
	}, {
		freezeTableName: true
		}
	);
	return client;
};