'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('kat_device', [{
      name_kat: 'Наушники',
      createdAt: new Date(),
    updatedAt: new Date()
     },
     {
      name_kat: 'Аксессуары',
      createdAt: new Date(),
    updatedAt: new Date()
     },
     {
      name_kat: 'Чехлы',
      createdAt: new Date(),
    updatedAt: new Date()
     },
    ], {});
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
