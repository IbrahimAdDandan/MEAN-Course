const configExpress = require('./config/express');
const configMongoose = require('./config/mongoose');
const db = configMongoose();
const app = configExpress();