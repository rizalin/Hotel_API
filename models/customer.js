'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    telp: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  customer.associate = function (models) {
    // associations can be defined here
  };
  return customer;
};