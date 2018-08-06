const express = require('express');
const config = require('./env/development');
module.exports = () => {
    const app = express();
    require('../app/routes/index.server.route')(app);
    app.listen(config.port, () => {
        console.log(`the server started at http://localhost:${config.port}/`);
    });
    return app;
};