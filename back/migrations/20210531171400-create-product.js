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
      image: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      id_podkat: {
        type: Sequelize.INTEGER,
        references:
      {
        model: 'podkat_devices',
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