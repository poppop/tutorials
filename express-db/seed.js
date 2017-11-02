var db = require('./services/db')

var seed = async () => {

    await db.knex.schema.dropTableIfExists('users')
    await db.knex.schema.createTableIfNotExists('users', function (table) {
        table.increments();
        table.string('name');
        table.string('email');
    })
    return await db.knex('users').insert({
        name: 'Andrew',
        email: 'andrew@andrew.com',
    })
}


seed()

process.exit()
