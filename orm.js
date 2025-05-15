// orm.js
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const DB_name = process.env.DB_NAME;
const DB_user = process.env.DB_USER;
const DB_password = process.env.DB_PASSWORD;
const DB_host = process.env.DB_HOST;

const sequelize = new Sequelize(DB_name, DB_user, DB_password, {
  host: DB_host,
  dialect: 'mariadb'
});

module.exports = { sequelize, DataTypes };
