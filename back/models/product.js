'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    }
  };
  Product.init({
    name_prod: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    count: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    id_podkat: {
      type: DataTypes.INTEGER,
    
    },

    id_stock: {
      type: DataTypes.INTEGER,
    },
    id_br: {
      type: DataTypes.INTEGER,
    }
  }, {

    sequelize,
    modelName: 'product',
    tableName: 'product',
  });
  return Product;
};