'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class landing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  landing.init({
    brand: DataTypes.STRING,
    hero_direct_link: DataTypes.STRING,
    first_paragraph: DataTypes.TEXT,
    second_paragraph: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'landing',
    underscored: true,
  });
  return landing;
};
