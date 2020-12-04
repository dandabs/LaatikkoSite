let express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');

let defaultRoute = require('./routes/default');

let app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');

app.engine('mustache', mustacheExpress());
app.use(express.static('static'))

app.use (bodyParser.urlencoded( {extended : true} ) );

app.use ('/', defaultRoute);

app.listen(2121,function() {
    console.log("Server started at http://localhost:2121/ or similar.");
});
