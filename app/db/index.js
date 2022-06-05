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
	dialectOptions
})

// Define model
module.exports = sequelize
