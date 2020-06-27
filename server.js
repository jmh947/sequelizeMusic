var express = require("express");

var PORT = process.env.PORT || 8081;

var app = express ();

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/music_controller.js");

app.use(routes);

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    });
    });