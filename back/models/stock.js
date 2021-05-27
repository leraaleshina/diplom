'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Stock.init({
    name_stock: DataTypes.STRING,
    sales: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'stock',
    tableName: 'stock',
  });
  return Stock; 
};