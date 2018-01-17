var config = require('../config/apiConfig')
var PostgreSQL = require('node-postgresql')
var pg = new PostgreSQL(config.dataBase)
module.exports = pg
