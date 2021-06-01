'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     * Example:
    */
     await queryInterface.bulkInsert('sotrud', [{
        surn_s: 'Макаренко',
        name_s: 'Карина',
        patr_s: 'Андреевна',
        createdAt: new Date(),
      updatedAt: new Date()
       },
       {
        surn_s: 'Макаренко',
        name_s: 'Карина',
        patr_s: 'Андреевна',
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
