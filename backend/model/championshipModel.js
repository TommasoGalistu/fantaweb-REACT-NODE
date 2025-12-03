const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');

const Championship = sequelize.define('Championship', {
    id_admin:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_player:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    
    
}, {
  tableName: 'championship'
});

module.exports = Championship;
