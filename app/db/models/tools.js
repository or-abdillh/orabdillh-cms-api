'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tools.init({
    name: DataTypes.STRING,
    asset_direct_link: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tools',
    underscored: true,
  });
  return tools;
};