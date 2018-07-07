var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) {
      var queryString = 'SELECT * FROM messages';
      dbQuery(queryString, cb);
    },

    // a function which can be used to insert a message into the database
    post: function () {

    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

