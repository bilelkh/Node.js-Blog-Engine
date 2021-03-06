var mysql = require('mysql'),
	Sequelize = require("sequelize"),
	db = {},
	sequelize;
sequelize = new Sequelize(process.env.database, process.env.user,  process.env.password, {
	host: process.env.host,
	port: process.env.dbPort,
	logging: false
})
db.posts = sequelize.define('posts', {
	title: Sequelize.STRING,
	content: Sequelize.TEXT,
	status: Sequelize.STRING //currently either 'published' or 'draft'
})
db.posts.sync();
module.exports = db;