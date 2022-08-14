'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      airport.hasMany(models.plane,{foreignKey: 'airport_id'})
      airport.hasMany(models.schedule,{foreignKey: 'airport_id'})
      airport.hasMany(models.route,{foreignKey: 'airport_id'})
    }
  }
  airport.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};