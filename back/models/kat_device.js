'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kat_device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Kat_device.init({
    name_kat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kat_device',
    tableName: 'kat_device',

  });
  return Kat_device;
};