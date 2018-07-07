CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `createdAt` VARCHAR(30) NULL DEFAULT NULL,
  `username_id` VARCHAR(50) NULL DEFAULT NULL,
  `text` VARCHAR(500) NULL DEFAULT NULL,
  `roomname` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

 /* Create other tables and define schemas for them here! */

CREATE TABLE users (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(25) NULL DEFAULT NULL,
  `last_name` VARCHAR(25) NULL DEFAULT NULL,
  `username` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `messages` ADD FOREIGN KEY (username_id) REFERENCES `users` (`id`);





/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

