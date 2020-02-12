'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "Momochi Kiruya",
          telp: "081234560987",
          email: "tsuncat@guguru.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  }
};
