'use strict';
module.exports = (sequelize, DataTypes) => {
  const room_type = sequelize.define('room_type', {
    type: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  room_type.associate = function(models) {
    // associations can be defined here
  };
  return room_type;
};