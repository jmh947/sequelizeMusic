// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "sequelizeBurger_db"
// });

// connection.connect(function(err) {
//     if (err) {
//         console.log("error connecting: " + err.stack);
//         return;
//     }

//     console.log("connected as id  + connection.threadId");
// });


// module.exports = connection;

var Sequelize = require('sequelize'), connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('sequelizeMusic_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  })
};

module.exports = connection;