var pg = require('pg')
var parse = require('pg-connection-string').parse
var config = require('../config')

var dbConnectionConfig;
if (process.env.DATABASE_URL) {
    // we're on heroku
    dbConnectionConfig = parse(process.env.DATABASE_URL) 
} 
else {
    // we're local, we've gotten the credentials manually
    dbConnectionConfig = {
        host: config.db.host,
        port: config.db.port,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
    }
}

pg.defaults.ssl = true;
var knex = require('knex')({
    client: 'pg',
    connection: dbConnectionConfig,
})


exports.knex = knex;