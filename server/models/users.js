const db = require("../config/database.js");
const Sequelize = require("sequelize");

const User = db.define("user", {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true,
      notNull: true,
      len: [2, 50],
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notNull: true,
      len: [2, 200],
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      is: "^[a-zA-ZiİçÇşŞğĞÜüÖö]*$",
      len: [2, 100],
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      is: "^[a-zA-ZiİçÇşŞğĞÜüÖö]*$",
      len: [2, 100],
    },
  },
  birthDate: {
    type: Sequelize.DATE,
  },
  description: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
