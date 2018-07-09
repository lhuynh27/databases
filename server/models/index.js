var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var queryStr = "select messsages.id, messages.text, messages.roomname, users.username from messages left outer join users on (messages.userid = users.id)";
      db.query(queryStr, function(err, results){
        cb(results);
      });
    },

    post: function (cb) {
      var queryStr = "insert into messages(text, userid, roomname) values(?, (selectid from users where username = ? limit 1),?)"; 
      //use ? as an parameter for the query function itself
      //limits to the first one we find
      db.query(queryStr, params, function(err, results){
        cb(results);
      });
    }
  },

  users: {
    get: function (cb) {
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results){
        cb(results);
      });
    },

    post: function (params, cb) {
      var queryStr = "insert into users(username) values(?)"; 
      db.query(queryStr, params, function(err, results){
        cb(results);
      });
    }
  }
};

