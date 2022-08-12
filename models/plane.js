'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      plane.belongsTo(models.airport)
    }
  }
  plane.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    schedule_id: DataTypes.INTEGER,
    route_id: DataTypes.INTEGER,
    airport_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plane',
  });
  return plane;
};