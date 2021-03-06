DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- server-spec.js line 21: empty db table before each test
DROP SCHEMA IF EXISTS users; 
DROP SCHEMA IF EXISTS rooms;
DROP SCHEMA IF EXISTS messages;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   roomname VARCHAR(25) NOT NULL,
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username_id INTEGER NOT NULL,
  text VARCHAR(500) NOT NULL,
  roomname_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (username_id) REFERENCES users(id),
  FOREIGN KEY (roomname_id) REFERENCES rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/
-- 