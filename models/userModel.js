const { Sequelize, DataTypes } = require("sequelize")

const sequelize = require("../assets/DB/database");


const User = sequelize.define("users", {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true
});

module.exports = User;


// class User extends Sequelize.Model {
    //     get fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     };
    // }
    
    // User.init({
    //         id: {
    //         type:DataTypes.INTEGER,
    //         autoIncrement: true,
    //         primaryKey: true,
    //         allowNull: false
    //     },
    //     userName: {
    //         type:DataTypes.STRING,
    //         allowNull: false
    //     },
    //     email: {
    //         type:DataTypes.STRING,
    //         allowNull: false
    //     },
    //     password: {
    //         type:DataTypes.STRING,
    //         allowNull: false
    //     }
    // },{
    //     sequelize,
    //     modelName: "User",
    //     timestamps: true,
    //     tableName:"users"
    // })
    

