'use strict';

const md5 = require('md5')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('account', [
      {
        username: 'orabdillh',
        password: md5('hans2340'),
        updated_at: new Date(),
        created_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
