const express = require('express');
const router = express.Router();

const users = require('../../db/users');

router.post('/', (req, res) => {
    users.getUser( req.body ).then( user => {
        res.json( user );
    });
});

router.post('/action', (req, res) => {
    users.updateInfo(req.body).then( r => {
        res.json( r );
    });
});

module.exports = router;