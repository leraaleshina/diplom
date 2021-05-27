'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  work.init({
    date_time: DataTypes.DATE,
    id_sotrud: DataTypes.INTEGER,
    id_client: DataTypes.INTEGER,
    id_serv: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'work',
    tableName: 'work',
  });
  return work;
};