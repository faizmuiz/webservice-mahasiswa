//import module express & body parser
const bodyParser = require('body-parser');
const express = require('express')

//var global express
const app = express()

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//panggil
var routes = require('./routes/routes')
routes(app)

//running server port
app.listen(4500, () => {
    console.log(`Server started on port`);
});