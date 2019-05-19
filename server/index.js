const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const newsRoutes = require('./api/routes/news');
const usersRoutes = require('./api/routes/users');
const loginRoutes = require('./api/routes/login');
const app = express();

app.use( morgan('tiny') );
app.use( cors() );
app.use( bodyParser.json() );

app.use('/news', newsRoutes);
app.use('/user', usersRoutes);
app.use('login', loginRoutes);

app.get('/', (req, res) => {
    res.json({
        message: "fake news"
    });
});

const port = process.env.PORT || 2222;
app.listen(port,  () => {
    console.log(`listening on port ${port}`);
});