'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('landing', [
      {
        brand: 'OR ABDILLH',
        hero_direct_link: 'https://google.drive.com',
        first_paragraph: 'Est ac ligula dapibus elementum. Nunc suscipit nisl eu felis. Duis.',
        second_paragraph: 'Id tortor. Etiam augue leo, cursus eget, ornare et, ornare sagittis.',
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
