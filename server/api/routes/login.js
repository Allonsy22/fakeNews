const express = require('express');
const router = express.Router();

const users = require('../../db/users');

router.get('/', (req, res) => {
    users.getAll().then( users => {
        res.json( users );
    });
});

router.post('/', (req, res) => {
    console.log( req.body );
    users.create(req.body).then( user => {
        res.json( user );
    });
});

router.delete('/', (req, res) => {
    users.deleteUsers().then( user => {
        res.json( user );
    });
});

module.exports = router;