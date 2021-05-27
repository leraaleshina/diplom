'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('work', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.DATE
      },
      id_sotrud: {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'sotrud',
          key: 'id'
        }
      },
      id_client: {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'client',
          key: 'id'
        }
      },
      id_serv: {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'service',
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
    await queryInterface.dropTable('work');
  }
};