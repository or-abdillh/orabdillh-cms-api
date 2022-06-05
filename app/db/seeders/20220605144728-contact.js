'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contact', [
      {
        fullname: 'Oka R. Abdillah',
        github: 'https://github.com/or-abdillh',
        instagram: 'https://instagram.com/or.abdillh',
        facebook: 'https://facebook.com/abdillahcfc',
        whatsapp: '0989748560',
        cv_direct_link: 'https://google.drive',
        address: 'Handil Bakti RT 006 RW 002',
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
