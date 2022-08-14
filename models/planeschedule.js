'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planeschedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      planeschedule.belongsTo(models.plane)
      planeschedule.belongsTo(models.schedule)
    }
  }
  planeschedule.init({
    planeId: DataTypes.INTEGER,
    scheduleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'planeschedule',
  });
  return planeschedule;
};