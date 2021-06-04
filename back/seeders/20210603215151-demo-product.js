'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('work', [{
        date_time: new Date()
        .toLocaleString()
        .split(", ")
        .join(" "),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
