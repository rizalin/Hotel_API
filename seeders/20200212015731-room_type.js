'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('room_types', [
      {
        type: "Single",
        price: 700000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Double",
        price: 1000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Deluxe",
        price: 1200000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('room_types', null, {});
  }
};
