const Sequelize = require("sequelize");
const connection = new Sequelize("ask", "root", "t1c8f4zs4ud3", {
   host: "localhost",
   dialect: "mysql"
});

module.exports = connection;