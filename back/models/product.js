'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Product.init({
    name_prod: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    count: DataTypes.INTEGER,
    color: DataTypes.STRING,
    id_podkat: {
      type: DataTypes.INTEGER,
    
    },

    id_stock: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: Model.Stocks,
      //   foreignKey: 'id'
      // }

    },
    id_br: {
      type: DataTypes.INTEGER,
      // references:
      // {
      //   model: Model.Brands,
      //   foreignKey: 'id'
      // }
    }
  }, {

    sequelize,
    modelName: 'product',
    tableName: 'product',
  });
  return Product;
};