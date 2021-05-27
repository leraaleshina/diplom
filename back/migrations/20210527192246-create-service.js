'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('service', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_serv: {
        type: Sequelize.STRING
      },
      stoim: {
        type: Sequelize.INTEGER
      },
      id_kat: {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'kat_device',
          key: 'id'
        }
      },
      id_stock: {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'stock',
          key: 'id'
        }
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
    await queryInterface.dropTable('service');
  }
};