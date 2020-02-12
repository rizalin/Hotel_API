'use strict';
module.exports = (sequelize, DataTypes) => {
  const income_report = sequelize.define('income_report', {
    booking_id: DataTypes.INTEGER,
    income: DataTypes.INTEGER
  }, {});
  income_report.associate = function(models) {
    // associations can be defined here
  };
  return income_report;
};