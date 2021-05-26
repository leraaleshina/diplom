'use strict';

const kat_device = require("../models/kat_device");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_prod: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      id_kat: {
        type: Sequelize.INTEGER,
      //   references:
      // {
      //   model: 'Kat_device',
      //   key: 'id'
      // }
      },
      id_stock: {
        type: Sequelize.INTEGER,
        // references:
        // {
        //   model: 'Stock',
        //   key: 'id'
        // }
      },
      id_br: {
        type: Sequelize.INTEGER,
      //   references:
      // {
      //   model: 'Brand',
      //   key: 'id'
      // }
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
    await queryInterface.dropTable('products');
  }
};