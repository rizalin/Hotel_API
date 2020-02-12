'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    booking_date: DataTypes.DATE,
    room_type: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    booked_by: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  booking.associate = function (models) {
    booking.belongsTo(models.customer, {
      as: "customer_info",
      foreignKey: "booked_by"
    }),
      booking.belongsTo(models.room_type, {
        as: "roomType",
        foreignKey: "room_type"
      })
  };
  return booking;
};