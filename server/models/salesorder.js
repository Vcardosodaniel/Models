'use strict';
module.exports = function(sequelize, DataTypes){
	var salesorder = sequelize.define ('salesorder', {
		id: {
			type: DataTypes.INTEGER,
			field: 'CODIGO',
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		order_code: {
			type: DataTypes.INTEGER,
			field: 'CODIGOCOMANDA'
		},
		client: {
			type: DataTypes.INTEGER,
			field: 'CLIENTE',
			allowNull: false,
			references: {
				model: 'client',
				key: 'id'
			}
		},
		confirmed: {
			type: DataTypes.INTEGER,
			field: 'CONFIRMADO'
		},
		seller: {
			type: DataTypes.INTEGER,
			field: 'VENDEDOR',
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		estimate_date: {
			type: DataTypes.DATE,
			field: 'DATAORCAMENTO',
			allowNull: false
		},
		validate_date: {
			type: DataTypes.DATE,
			field: 'DATAVALIDADE'
		},
		discount: {
			type: DataTypes.DOUBLE,
			field: 'DESCONTO'
		},
		fiscal_doc: {
			type: DataTypes.INTEGER,
			field: 'DOCFISCAL'
		},
		doc_type: {
			type: DataTypes.STRING,
			field: 'TIPODOC'
		},
		obs: {
			type: DataTypes.BLOB,
			field: 'OBSERVACAO'
		},
		ped_orc: {
			type: DataTypes.INTEGER,
			field: 'PED_ORC'
		},
		total: {
			type: DataTypes.DOUBLE,
			field: 'TOTAL'
		},
		impressed: {
			type: DataTypes.TEXT('tiny'),
			field: 'IMPRESSO'
		},
		client_name: {
			type: DataTypes.STRING,
			field: 'CLIENTE_NOME'
		},
		closed: {
			type: DataTypes.TEXT('tiny'),
			field: 'FECHADO'
		},
		delivery_date: {
			type: DataTypes.DATE,
			field: 'DATA_ENTREGA'
		}, 
		payment_form: {
			type: DataTypes.TEXT('tiny'),
			field: 'FORMA_PAGAMENTO'
		}
	}, {
		freezeTableName: true
		}
	);
	return pedidovenda;
};