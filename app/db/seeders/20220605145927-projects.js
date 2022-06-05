'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        id: 1,
        title: 'OMDB Web App',
        tags: 'vue-js tailwindcss open-api',
        github_direct_link: 'https://github.com/or-abdillh/omdb-app',
        instagram_direct_link: 'https://instagram.com/or.abdillh',
        asset_direct_link: 'https://google.drive.com',
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
