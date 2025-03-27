const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Obituary = sequelize.define('Obituary', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  date_of_birth: { type: DataTypes.DATEONLY, allowNull: false },
  date_of_death: { type: DataTypes.DATEONLY, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  submission_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  slug: { type: DataTypes.STRING, unique: true }
});

module.exports = Obituary;
