'use strict';
module.exports = (sequelize, DataTypes) => {
  const check_in = sequelize.define('check_in', {
    booking_id: DataTypes.INTEGER,
    booking_code: DataTypes.STRING,
    redeemed: DataTypes.BOOLEAN
  }, {});
  check_in.associate = function (models) {
    check_in.belongsTo(models.booking, {
      as: "booking_info",
      foreignKey: "booking_id"
    })
  };
  return check_in;
};