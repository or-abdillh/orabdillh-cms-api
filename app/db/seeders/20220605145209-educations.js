'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('educations', [
      {
        id: 1,
        title: 'SMAN 1 Alalak',
        from: '2022',
        until: 'sekarang',
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
