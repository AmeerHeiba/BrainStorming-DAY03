const Sequelize = require("sequelize");

const sequelize = new Sequelize('notes', 'root', 'Ghaza2024@',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;