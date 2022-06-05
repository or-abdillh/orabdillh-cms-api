'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('landing', { 
      brand: {
        type: Sequelize.STRING
      },
      hero_direct_link: {
        type: Sequelize.STRING
      },
      first_paragraph: {
        type: Sequelize.TEXT
      },
      second_paragraph: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('landing_navbars');
  }
};
