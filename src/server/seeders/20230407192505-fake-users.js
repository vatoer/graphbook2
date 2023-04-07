'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        avatar: '/uploads/avatar1.png',
        username: 'fulan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar2.png',
        username: 'adam',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
