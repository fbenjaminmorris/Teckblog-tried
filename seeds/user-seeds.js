const { User } = require('../models');

const userData = [
  {
    username: "John",
    email: "John@gmail.com",
    password: "password1234"
  },
  {
    username: "Bobby",
    email: "bobby@gmail.com",
    password: "password1234"
  },
  {
    username: "Steven",
    email: "steven@gmail.com",
    password: "password1234"
  },
  {
    username: "Lisa",
    email: "lisa@gmail.com",
    password: "password1234"
  },
  {
    username: "Harry",
    email: "harry@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;