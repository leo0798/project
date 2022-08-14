'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      route.belongsTo(models.airport,{foreignKey:'airport_id'})
      route.belongsTo(models.plane,{foreignKey:'plane_id'})
    }
  }
  route.init({
    airport_id: DataTypes.INTEGER,
    plane_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'route',
  });
  return route;
};