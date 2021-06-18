"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert(
    //   "product",
    //   [
    //     {
    //       name_prod: "name",
    //       price: 1234,
    //       image: "jkfdbvkdbvkzdfbvdlzhvbfdlzh",
    //       count: 123,
    //       desc: "Описание данного товара достаточно велико, чтобы поместить сюда",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
