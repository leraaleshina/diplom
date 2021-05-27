'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  service.init({
    name_serv: DataTypes.STRING,
    stoim: DataTypes.INTEGER,
    id_kat: DataTypes.INTEGER,
    id_stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'service',
    tableName: 'service',
  });
  return service;
};