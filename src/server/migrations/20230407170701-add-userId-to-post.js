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
    await Promise.all(
      [
        queryInterface.addColumn('Posts',
          'userId',
          {
            type: Sequelize.INTEGER,
          }),
        queryInterface.addConstraint('Posts', {
          fields: ['userId'],
          type: 'foreign key',
          name: 'fk_user_id',
          references: {
            table: 'Users',
            field: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }),
      ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await Promise.all([
      queryInterface.removeColumn('Posts', 'userId'),
    ]);
  }
};
