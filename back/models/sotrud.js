'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sotrud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sotrud.init({
    surn_s: DataTypes.STRING,
    name_s: DataTypes.STRING,
    patr_s: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sotrud',
  });
  return sotrud;
};