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
      plane.belongsTo(models.airport,{foreignKey:'airport_id'})
      plane.hasOne(models.route,{foreignKey:'plane_id'})
      plane.belongsToMany(models.schedule,{through: models.planeschedule})
    }
  }
  plane.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    airport_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plane',
  });
  return plane;
};