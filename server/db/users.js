const Joi = require('joi');
const db = require('./connection');

const users = db.get("users");

const schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
});

function getAll() {
    return users.find();
}

function getUser( obj ) {
    return users.findOne( obj );
}

function create( user ) {
    return users.find( {"id": user.id } ).then( x => {
        if ( !x.length ) {
            user.likedPost = [];
            user.commentedPost = [];
            return users.insert( user );
        }
        return x;
    });
}

function updateInfo ( user ) {
    switch( user.action ) {
        case "like":
            if ( user.method == "push" ) {
                return users.update({"id": user.id}, {$push: {"likedPost": user.value}});
            } else {
                return users.update({"id": user.id}, {$pull: {"likedPost": user.value}});
            }
        case "comment":
            if ( user.method == "push" ) {
                return users.update({"id": user.id}, {$push: {"commentedPost": user.value}});
            } else {
                return users.update({"id": user.id}, {$pull: {"commentedPost": user.value}});
            }
    }
}

function deleteUsers( user ) {
    return users.remove();
}

module.exports = {
    getAll,
    create,
    updateInfo,
    deleteUsers,
    getUser
}