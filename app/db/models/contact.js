'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contact.init({
    fullname: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    github: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    address: DataTypes.STRING,
    cv_direct_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact',
    underscored: true,
    updatedAt: true,
    createdAt: true
  });

  return contact;
};
