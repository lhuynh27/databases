// Create a database connection

//WITHOUT SEQUELIZE, USING RAW CONNECTION
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});
connection.connect();
module.exports = connection;

//WITH SEQUELIZE
//Sequelize is a promise-based ORM.
//ORM: Object-relational mapping is a technique for converting data between incompatible type systems 
//using object-oriented programming languages.

// var Sequelize = require('Sequelize');
// var orm = new Sequelize('chat', 'student', 'student'); 

//to instantiate all the models that we need must provide db name, username, and password

// var User = orm.define('User', {
//   username: Sequelize.STRING
// });

// var Message = orm.define('Message', {
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

//declare relationships, must do both or may not function correctly

// User.hasMany(Message);
// Message.belongsTo(User); //where your foreign key lives

// User.sync();
// Message.sync();

// exports.User = User;
// exports.Message = Message;