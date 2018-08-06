const mongoose = require('mongoose');
const config = require('./env/development');

module.exports = function() {
    const db = mongoose.connect(config.db, { useNewUrlParser: true })
        .then(
            () => {
                console.log('the database connected successfully :)');
            },
            err => {
                console.log(`there is an error occured: ${err}`);
            }
        );
        require('../app/models/article.server.model');
    return db;
};