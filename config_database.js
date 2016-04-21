var base_de_dados = new Sequelize ('ALANA', 'postgres', 'masterkey'{
	host: 127.0.0.1,
	dialect: 'postgres',

	pool: {
		max:  5,
		min:  0,
		idle: 10000
	}
});