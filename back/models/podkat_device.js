'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class podkat_device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  podkat_device.init({
    form_device: DataTypes.STRING,
    id_kat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'podkat_device',
  });
  return podkat_device;
};