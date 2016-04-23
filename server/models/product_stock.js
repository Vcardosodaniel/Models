'use strict';
module.exports = function(sequelize, DataTypes){
	var product_stock = sequelize.define ('product_stock', {
		id: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		cest_code: {
			type: DataTypes.INTEGER,
			field: 'CODIGOCEST'
		},
		bar_code: {
			type: DataTypes.INTEGER,
			field: 'CODBARRAS'
		},
		description: {
			type: DataTypes.STRING,
			field: 'DESCRICAO'
		},
		provider: {
			type: DataTypes.INTEGER,
			field: 'FORNECEDOR'
		},
		classification: {
			type: DataTypes.INTEGER,
			field: 'CLASSIFICACAO'
		},
		department: {
			type: DataTypes.INTEGER,
			field: 'DEPARTAMENTO'
		},
		sub_group: {
			type: DataTypes.INTEGER,
			field: 'SUBGRUPO'
		},
		group: {
			type: DataTypes.INTEGER,
			field: 'GRUPO'
		},
		buy_med: {
			type: DataTypes.STRING,
			field: 'MEDCOMPRA'
		},
		register_date: {
			type: DataTypes.DATE,
			field: 'DATACADASTRO'
		},
		location: {
			type: DataTypes.STRING,
			field: 'LOCALIZACAO'
		},
		weight: {
			type: DataTypes.DOUBLE,
			field: 'PESO'
		},
		commission: {
			type: DataTypes.FLOAT,
			field: 'COMISSAO'
		}, 
		gross_profit: {
			type: DataTypes.FLOAT,
			field: 'LUCROBRUTO'
		},
		obs: {
			type: DataTypes.BLOB,
			field: 'OBSERVACAO'
		},
		produce_type: {
			type: DataTypes.STRING,
			field: 'TIPOPRODUCAO'
		},
		item_type: {
			type: DataTypes.STRING,
			field: 'TIPOITEM'
		},
		origin: {
			type: DataTypes.INTEGER,
			field: 'ORIGEM'
		},
		cst_csosn: {
			type: DataTypes.INTEGER,
			field: 'CSTCSOSN'
		},
		cst_ipi: {
			type: DataTypes.INTEGER,
			field: 'CSTIPI'
		},
		ipi_value: {
			type: DataTypes.DOUBLE,
			field: 'VALORIPI'
		},
		ipi_percentage: {
			type: DataTypes.FLOAT,
			field: 'PORCENTAGEMIPI'
		},
		nat_op_ent: {
			type: DataTypes.INTEGER,
			field: 'NATOPENT'
		},
		nat_op_out: {
			type: DataTypes.INTEGER,
			field: 'NATOPSAIDA'
		},
		ncm: {
			type: DataTypes.INTEGER,
			field: 'NCM'
		},
		cst_pis_cofins_entry: {
			type: DataTypes.INTEGER,
			field: 'CSTPISCOFINSENTRADA'
		},
		pis_entry: {
			type: DataTypes.DOUBLE,
			field: 'PISENTRADA'
		},
		cofins_entry: {
			type: DataTypes.DOUBLE,
			field: 'COFINSENTRADA'
		},
		cst_pis_cofins_out: {
			type: DataTypes.INTEGER,
			field: 'CSTPISCOFINSSAIDA'
		},
		pis_out: {
			type: DataTypes.DOUBLE,
			field: 'PISSAIDA'
		},
		cofins_out: {
			type: DataTypes.DOUBLE,
			field: 'COFINSSAIDA'
		},
		icms: {
			type: DataTypes.INTEGER,
			field: 'ICMS'
		},
		weighable: {
			type: DataTypes.STRING,
			field: 'PESAVEL'
		},
		measurement: {
			type: DataTypes.STRING,
			field: 'MEDIDA'
		},
		cod_tech_record: {
			type: DataTypes.INTEGER.
			field: 'CODFICHATECNICA'
		},
		cod_kit: {
			type: DataTypes.INTEGER,
			field: 'CODKIT'
		},
		photo: {
			type: DataTypes.STRING,
			field: 'FOTO'
		},
		lot_control:{
			type: DataTypes.STRING,
			field: 'CONTROLELOTE'
		},
		serial_control: {
			type: DataTypes.INTEGER,
			field: 'CONTROLESERIAL'
		},
		grid_control: {
			type: DataTypes.INTEGER,
			field: 'CONTROLEGRADE'
		},
		mva: {
			type: DataTypes.DOUBLE,
			field: 'MVA'
		},
		cean_trib: {
			type: DataTypes.STRING,
			field: 'CEANTRIB'
		},
		cfop_nfce_out: {
			type: DataTypes.INTEGER,
			field: 'CFOPSAIDANFCE'
		},
		unity_fact: {
			type: DataTypes.DOUBLE,
			field: 'FATORUND'
		},
		genre_cod: {
			type: DataTypes.INTEGER,
			field: 'CODGENERO'
		},
		lst: {
			type: DataTypes.STRING,
			field: 'LST'
		},
		sector_cod: {
			type: DataTypes.INTEGER,
			field: 'CODSETOR'
		},
		recipe: {
			type: DataTypes.BLOB,
			field: 'RECEITA'
		},
		price_cod: {
			type: DataTypes.INTEGER,
			field: 'CODPRECO'
		},
		sell_projection: {
			type: DataTypes.DOUBLE,
			field: 'PROJECAO_VENDAS'
		},
		nutritional_cod: {
			type: DataTypes.STRING,
			field: 'CODNUTRICIONAL'
		},
		iat: {
			type: DataTypes.TEXT('tiny'),
			field: 'IAT'
		},
		ippt: {
			type: DataTypes.TEXT('tiny'),
			field: 'IPPT'
		},
		irrf: {
			type: DataTypes.DOUBLE,
			field: 'IRRF'
		},
		iss: {
			type: DataTypes.DOUBLE,
			field: 'ISS'
		},
		csll: {
			type: DataTypes.DOUBLE,
			field: 'CSLL'
		},
		monophase: {
			type: DataTypes.INTEGER,
			field: 'MONOFASICO'
		},
		measurement_cod: {
			type: DataTypes.INTEGER,
			field: 'COD_MEDIDA'
		},
		measurement_buy_cod: {
			type: DataTypes.INTEGER,
			field: 'COD_MEDIDA_COMPRA'
		},
		qtd:{
			type: DataTypes.DOUBLE,
			field: 'QTD'
		},
		sell_price: {
			type: DataTypes.DOUBLE,
			field: 'PRECOVENDA'
		},
		term_sell_price: {
			type: DataTypes.DOUBLE,
			field: 'PRECOVENDAPRAZO'
		},
		reference: {
			type: DataTypes.STRING,
			field: 'REFERENCIA'
		},
		buy_price: {
			type: DataTypes.DOUBLE,
			field: 'PRECOCOMPRA'
		},
		cost_price: {
			type: DataTypes.DOUBLE,
			field: 'PRECOCUSTO'
		},
		last_buy: {
			type: DataTypes.DATE,
			field: 'ULTIMACOMPRA'
		},
		last_sell: {
			type: DataTypes.DATE,
			field: 'ULTIMAVENDA'
		},
		middle_cost: {
			type: DataTypes.DOUBLE,
			field: 'CUSTOMEDIO'
		}, 
		qtd_initial: {
			type: DataTypes.DOUBLE,
			field: 'QUANTIDADEINI'
		},
		anp: {
			type: DataTypes.INTEGER,
			field: 'ANP'
		},
		active: {
			type: DataTypes.INTEGER,
			field: 'ATIVO'
		},
		actual_date:{
			type: DataTypes.DATE,
			field: 'DATAHORA_ATU'
		}
	}, {
		freezeTableName: true
		}
	);
	return pedidovenda;
};