'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('client', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surn_c: {
        type:
          Sequelize.STRING
      },
      name_c: {
        type:
          Sequelize.STRING
      },
      patr_c: {
        type:
          Sequelize.STRING
      },
      address: {
        type:
          Sequelize.STRING
      },
      ph_number_c: {
        type:
          Sequelize.STRING
      },
      login_c: {
        type:
          Sequelize.STRING
      },
      password_c: {
        type:
          Sequelize.STRING
      },
      photo_c: {
        type:
          Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('client');
  }
};