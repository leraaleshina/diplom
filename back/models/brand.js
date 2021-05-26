'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      this.hasMany(Product, {
        foreignKey: 'id'
      })
    }
  };
  Brand.init({
    name_brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brands',
  });
  return Brand;
};