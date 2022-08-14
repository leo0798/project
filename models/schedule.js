'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedule.belongsTo(models.airport,{foreignKey:'airport_id'})
      schedule.belongsToMany(models.plane,{through: models.planeschedule})
    }
  }
  schedule.init({
    timeArrivePlane: DataTypes.DATE,
    timeDeparturePlane: DataTypes.DATE,
    airport_id: DataTypes.INTEGER,
    plane_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'schedule',
  });
  return schedule;
};