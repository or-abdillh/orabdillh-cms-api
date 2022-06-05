'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('skills', [
      {
        id: 1,
        title: 'Semper nibh. Aenean diam odio, scelerisque at, ullamcorper nec, tincidunt dapibus.',
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
