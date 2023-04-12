'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await Promise.all([
      queryInterface.addColumn('Users',
        'email',
        {
          type: Sequelize.STRING,
          unique: true,
        }
      ),
      queryInterface.addColumn('Users',
        'password',
        {
          type: Sequelize.STRING,
        }
      ),
    ])
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('Users', 'email'),
      queryInterface.removeColumn('Users',
        'password'),
    ])
  }
};
