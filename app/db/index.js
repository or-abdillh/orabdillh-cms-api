'use strict'

require('dotenv').config({ path: `${process.cwd()}/.env` })

const { Sequelize, DataTypes } = require('sequelize')

// Define node env
const env = process.env.NODE_ENV || 'dev'

const dialectOptions = env === 'dev' ? {  } : {
	ssl: {
		require: true,
		rejectUnauthorized: false
	}
}

// Define connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	logging: false,
	dialectOptions,
	define: { freezeTableName: true }
})

// Define model
const modelsDefined = [
	require('./models/account.js'),
	require('./models/contact.js'),
	require('./models/educations.js'),
	require('./models/landing.js'),
	require('./models/projects.js'),
	require('./models/skills.js'),
	require('./models/tools.js')
]

for ( const model of modelsDefined ) { model(sequelize, DataTypes) }

module.exports = sequelize
