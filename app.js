const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const hbs = require('express-handlebars');
const routes = require('./routes/index');


const app = express();

//view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', routes);
app.use(express.static('public'));


app.listen(port, () => console.log(`Listening on port ${port}!`));
