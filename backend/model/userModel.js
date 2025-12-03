const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM('boss', 'admin', 'user'),
        allowNull: false,
        defaultValue: 'user'
    },
    isEmailVerified:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
  tableName: 'users'
});

module.exports = User;
