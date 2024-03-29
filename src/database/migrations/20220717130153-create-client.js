'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      value: {
        type: Sequelize.DECIMAL(10, 2)
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients')
  }
}
