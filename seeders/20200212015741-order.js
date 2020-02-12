'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bookings",
      [
        {
          booking_date: "2020-03-21",
          room_type: 3,
          total_room: 1,
          total_price: 1200000,
          status: "Pending",
          booked_by: 1,
          attachment: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('orders', null, {});

  }
};
