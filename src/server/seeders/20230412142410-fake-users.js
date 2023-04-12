'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        avatar: '/uploads/avatar1.png',
        username: 'fulan',
        password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife',
        email: 'fulan@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar2.png',
        username: 'adam',
        password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife',
        email: 'adam@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: '/uploads/avatar2.png',
        username: 'idris',
        password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife',
        email: 'idris@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
