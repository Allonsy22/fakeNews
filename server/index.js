const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const news = require('./db/news');
const users = require('./db/users');

const app = express();

app.use( morgan('tiny') );
app.use( cors() );
app.use( bodyParser.json() );

app.get('/', (req, res) => {
    res.json({
        message: "fake news"
    });
});

app.get('/news', (req, res) => {
    news.getAll().then( news => {
        res.json( news );
    });
});

app.post('/news', (req, res) => {
    news.create(req.body).then( novelty => {
        res.json( novelty );
    }).catch( error => {
        res.status(500);
        res.json(error);
    });
});

app.post('/news/update/likes', (req, res) => {
    news.updateNoveltyLikes( req.body ).then( result => {
        res.json( result );
    });
});

app.post('/news/update/comments', (req, res) => {
    news.updateNoveltyComments(req.body).then( result => {
        res.json( result );
    });
});

app.delete('/news', (req, res) => {
    news.deleteNews(req.body).then( novelty => {
        res.json( novelty );
    });
});

app.get('/login', (req, res) => {
    users.getAll().then( users => {
        res.json( users );
    });
});

app.post('/login', (req, res) => {
    console.log( req.body );
    users.create(req.body).then( user => {
        res.json( user );
    });
});

app.delete('/login', (req, res) => {
    users.deleteUsers().then( user => {
        res.json( user );
    });
});

app.post('/user', (req, res) => {
    users.getUser( req.body ).then( user => {
        res.json( user );
    });
});

app.post('/user/action', (req, res) => {
    users.updateInfo(req.body).then( r => {
        res.json( r );
    });
});

const port = process.env.PORT || 2222;
app.listen(port,  () => {
    console.log(`listening on port ${port}`);
});