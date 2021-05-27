'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Clients.init({
    surn_c: DataTypes.STRING, 
    name_c: DataTypes.STRING, 
    patr_c:DataTypes.STRING, 
    address:DataTypes.STRING, 
    ph_number_c:DataTypes.STRING, 
    login_c:DataTypes.STRING, 
    password_c:DataTypes.STRING, 
    photo_c:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'client',
    tableName: 'client',
  });
  return Clients;
};