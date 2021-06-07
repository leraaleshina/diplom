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
    name_c: DataTypes.STRING,
    login_c:DataTypes.STRING, 
    password_c:DataTypes.STRING, 
    role:{
      type: DataTypes.STRING,
           defaultValue: "user"
    }, 
  }, {
    sequelize,
    modelName: 'client',
    tableName: 'client',
  });
  return Clients;
};