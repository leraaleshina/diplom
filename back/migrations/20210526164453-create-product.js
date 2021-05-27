'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
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
      id_br: {
        type: Sequelize.INTEGER,
        references:
      {
        model: 'brand',
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
    await queryInterface.dropTable('product');
  }
};