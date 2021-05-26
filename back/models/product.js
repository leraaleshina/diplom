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
    static associate({Stock, Brand, Kat_device}) {
      this.belongsTo(Stock, {
        foreignKey: 'id_stock'
      });
      this.belongsTo(Brand, {
        foreignKey: 'id_br'
      });
      this.belongsTo(Kat_device, {
        foreignKey: 'id_kat'
      });
    }
  };
  Product.init({
    name_prod: DataTypes.STRING,
    price: DataTypes.FLOAT,

    id_kat: {
      type: DataTypes.INTEGER,
      // references:  {
      //   model:  Model.Kat_devices,
      //   foreignKey: 'id'
      // }
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
    modelName: 'Product',
    tableName:'products',

  });
  return Product;
};