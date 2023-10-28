'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'Fauzan Muttaqin',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('todos', [
    {
      title: 'Olahraga',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Bermain',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'belajar dirumah',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'makan minum',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Tidur dikasur',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  }
};