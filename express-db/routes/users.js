var express = require('express');
var router = express.Router();
var db = require('../services/db')

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try {
        users = await db.knex('users').select()
    } 
    catch(e) {
        next(e)
    }
    res.json(users);
});

router.post('/', async (req, res, next) => {
    try {
        var insertUser = {
            name: req.body.name,
            email: req.body.email
        }
        await db.knex('users').insert(insertUser)
    }
    catch (e) {
        next(e)
    }
    res.json(insertUser)
})



module.exports = router;
