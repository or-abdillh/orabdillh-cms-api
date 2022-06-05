'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class educations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  educations.init({
    title: DataTypes.STRING,
    from: DataTypes.STRING,
    until: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'educations',
    underscored: true,
  });
  return educations;
};