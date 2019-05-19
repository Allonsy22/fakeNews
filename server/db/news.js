const Joi = require('joi');
const db = require('./connection');

const news = db.get('news');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    likes: Joi.number(),
    comments: Joi.array(),
    nickname: Joi.string().required(),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    }),
})

function getNews() {
    return news.find();
}

function create(novelty) {
    novelty.likes = 0;
    novelty.comments = [];
    const result = Joi.validate( novelty, schema );
    if ( result.error == null ) {
        let date = new Date(),
            y = date.getFullYear(),
            m = date.getMonth() + 1,
            d = date.getDate(),
            hh = date.getHours(),
            mm = date.getMinutes();

        m = m < 10 ? "0" + m : m;
        d = d < 10 ? "0" + d : d;
        hh = hh < 10 ? "0" + hh : hh;
        mm = mm < 10 ? "0" + mm : mm;

        let created = `${y}.${m}.${d}  ${hh}:${mm}`;
        novelty.created = created;
        return news.insert( novelty );
    } else {
        return Promise.reject( result.error );
    }
}

function deleteNews(novelty) {
    return news.remove(novelty);
}

function updateNoveltyLikes(obj) {
    return news.findOne(obj._id).then( novelty => {
        let key = obj["key"],
            value = novelty[obj["key"]] + obj.step;
        return news.update({"_id": obj._id}, {$set: {"likes": value}});
    });
}

function updateNoveltyComments(obj) {
    console.log(obj);
    return news.update({"_id": obj.postId}, {$push: {"comments": obj.value}});
}

module.exports = {
    getNews,
    create,
    deleteNews,
    updateNoveltyLikes,
    updateNoveltyComments
};