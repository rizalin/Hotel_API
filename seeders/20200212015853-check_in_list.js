'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "check_ins",
      [
        {
          booking_id: 1,
          booking_code: "2dfgh4",
          redeemed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('check_ins', null, {});
  }
};
