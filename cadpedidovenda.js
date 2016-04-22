var cadpedidovenda = sequelize.define ('cadpedidovenda', {

	CODIGO: {
		type: Sequelize.INTEGER,
		field: 'CODIGO',
		primaryKey: true,
		allowNull: false
	},

	CODIGOCOMANDA: {
		type: Sequelize.INTEGER,
		field: 'CODIGOCOMANDA'
	},

	CLIENTE: {
		type: Sequelize.INTEGER,
		field: 'CLIENTE',
		allowNull: false
	},

	CONFIRMADO: {
		type: Sequelize.INTEGER,
		field: 'CONFIRMADO'
	},

	VENDEDOR: {
		type: Sequelize.INTEGER,
		field: 'VENDEDOR',
		allowNull: false
	},

	DATAORCAMENTO: {
		type: Sequelize.DATE,
		field: 'DATAORCAMENTO',
		allowNull: false
	},

	DATAVALIDADE: {
		type: Sequelize.DATE,
		field: 'DATAVALIDADE'
	},

	DESCONTO: {
		type: Sequelize.DOUBLE,
		field: 'DESCONTO'
	},

	DOCFISCAL: {
		type: Sequelize.INTEGER,
		field: 'DOCFISCAL'
	},

	TIPODOC: {
		type: Sequelize.STRING,
		field: 'TIPODOC'
	},

	OBSERVACAO: {
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

	IMPRESSO: {
		type: Sequelize.TEXT('tiny'),
		field: 'IMPRESSO'
	},

	CLIENTE_NOME: {
		type: Sequelize.STRING,
		field: 'CLIENTE_NOME'
	},

	FECHADO: {
		type: Sequelize.TEXT('tiny'),
		field: 'FECHADO'
	},

	DATA_ENTREGA: {
		type: Sequelize.DATE,
		field: 'DATA_ENTREGA'
	}, 

	FORMA_PAGAMENTO: {
		type: Sequelize.TEXT('tiny'),
		field: 'FORMA_PAGAMENTO'
	}
}, {
	freezeTableName: true
	},
	{
		getterMethods: {
			getCODIGO: function() {return this.CODIGO};
			getCODIGOCOMANDA: function() {return this.CODIGOCOMANDA};
			getCONFIRMADO: function() {return this.CONFIRMADO};
			getCLIENTE: function() {return this.CLIENTE};
			getVENDEDOR: function() {return this.VENDEDOR};
			getDATAORCAMENTO: function() {return this.DATAORCAMENTO};
			getDATAVALIDADE: function() {return this.DATAVALIDADE};
			getDESCONTO: function() {return this.DESCONTO};
			getDOCFISCAL: function() {return this.DOCFISCAL};
			getTIPODOC: function() {return this.TIPODOC};
			getOBSERVACAO: function() {return this.OBSERVACAO};
			getPED_ORC: function() {return this.PED_ORC};
			getTOTAL: function() {return this.TOTAL};
			getIMPRESSO: function() {return this.IMPRESSO};
			getCLIENTE_NOME: function() {return this.CLIENTE_NOME};
			getFECHADO: function() {return this.FECHADO};
			getDATA_ENTREGA: function() {return this.DATA_ENTREGA};
			getFORMA_PAGAMENTO: function() {return this.FORMA_PAGAMENTO};
		},

		setterMethods: {
			setCODIGO: function(CODIGO) {return this.setDataValue('CODIGO')};
			setCODIGOCOMANDA: function(CODIGOCOMANDA) {return this.setDataValue('CODIGOCOMANDA')};
			setCONFIRMADO: function(CONFIRMADO) {return this.setDataValue('CONFIRMADO')};
			setCLIENTE: function(CLIENTE) {return this.setDataValue('CLIENTE')};
			setVENDEDOR: function(VENDEDOR) {return this.setDataValue('VENDEDOR')};
			setDATAORCAMENTO: function(DATAORCAMENTO) {return this.setDataValue('DATAORCAMENTO')};
			setDATAVALIDADE: function(DATAVALIDADE) {return this.setDataValue('DATAVALIDADE')};
			setDESCONTO: function(DESCONTO) {return this.setDataValue('DESCONTO')};
			setDOCFISCAL: function(DOCFISCAL) {return this.setDataValue('DOCFISCAL')};
			setTIPODOC: function(TIPODOC) {return this.setDataValue('TIPODOC')};
			setOBSERVACAO: function(OBSERVACAO) {return this.setDataValue('OBSERVACAO')};
			setPED_ORC: function(PED_ORC) {return this.setDataValue('PED_ORC')};
			setTOTAL: function(TOTAL) {return this.setDataValue('TOTAL')};
			setIMPRESSO: function(IMPRESSO) {return this.setDataValue('IMPRESSO')};
			setCLIENTE_NOME: function(CLIENTE_NOME) {return this.setDataValue('CLIENTE_NOME')};
			setFECHADO: function(FECHADO) {return this.setDataValue('FECHADO')};
			setDATA_ENTREGA: function(DATA_ENTREGA) {return this.setDataValue('DATA_ENTREGA')};
			setFORMA_PAGAMENTO: function(FORMA_PAGAMENTO) {return this.setDataValue('FORMA_PAGAMENTO')};	
		},
	}

);