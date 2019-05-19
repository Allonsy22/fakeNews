const express = require('express');
const router = express.Router();

const news = require('../../db/news');

router.get('/', (req, res) => {
    news.getNews().then( news => {
        res.json( news );
    }).catch( error => {
        res.status(500);
        res.json();
    });
});

router.post('/', (req, res) => {
    news.create(req.body).then( novelty => {
        res.json( novelty );
    }).catch( error => {
        res.status(500);
        res.json(error);
    });
});

router.post('/update/likes', (req, res) => {
    news.updateNoveltyLikes( req.body ).then( result => {
        res.json( result );
    });
});

router.post('/update/comments', (req, res) => {
    news.updateNoveltyComments(req.body).then( result => {
        res.json( result );
    });
});

router.delete('/', (req, res) => {
    news.deleteNews(req.body).then( novelty => {
        res.json( novelty );
    });
});

module.exports = router;