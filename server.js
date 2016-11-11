const express = require('express');
const methodOveride = require('method-overide');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


var app = express();
app.use(express.static(process.cwd()+'/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOveride('_method'));
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');

app.use('/', routes);

var port = 3000;
app.listen(port);
