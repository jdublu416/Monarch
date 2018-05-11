var express = require('express');
var bodyParser=require('body-parser');
var exphbs = require('express-handlebars');
var routes=require('./routes/api_routes');
var db = require('./models');
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(routes);
db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function(){
        console.log("server listening on: https://localhost:"+PORT);
    });
});