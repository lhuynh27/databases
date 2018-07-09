var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if(err){
          alert('Error getting messages!');
        } else {
        res.json(results);
        }
      });
    }, 

    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      models.messages.post(params, function(err, results){
        if(err){
          alert('Error creating message!')
        } else {
        res.json(results);
        }
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results){
        if(err){
          alert('Error getting users!');
        } else {
        res.json(results);
        }
      });
    }, 

    post: function (req, res) {
      var params = [ req.body[username] ];
      models.users.post(params, function(err, results){
        if(err){
          alert('Error creating user!');
        } else {
        res.json(results);
        }
      });
    }
  }
};






//WITH SEQUELIZE
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       Message.findAll( {include: [User]} ) //doing left outer join by default
//         .complete(fucntion(err, results){
//           //TODO: handle err
//           res.json(results);
//         });
//     }, 

//     post: function (req, res) {
//       User.findOrCreate( {username: req.body[username]} )
//         .complete(function(err, user){
//           var params = { 
//             text: req.body[text]
//             username: req.body[username]
//             roomname: req.body[roomname] 
//           };
//           Message.create(params)
//             .complete(function(err, results){
//               res.sendStatus(201);
//           });
//       });
//     }
//   },
//
//   users: {
//     get: function (req, res) {
//       User.findAll()
//         .complete(fucntion(err, results){
//           //TODO: handle err
//           res.json(results);
//         });
//     }, 

//     post: function (req, res) {
//       User.create( {username: req.body[username]} )
//         .complete(function(err, user){
//               res.sendStatus(201);
//         });
//     }
//   }
// };


