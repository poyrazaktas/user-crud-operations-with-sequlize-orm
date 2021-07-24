const Sequelize = require("sequelize");
const db = new Sequelize("alo-tech-proje", "user", "pass", {
  host: "./dev.sqlite",
  dialect: "sqlite",
});
module.exports = db;
