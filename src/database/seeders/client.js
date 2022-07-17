module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [{
        id: 1,
        email: 'luana@gmail.com',
        password: '456789'
      },
      {
        id: 2,
        email: 'tony@gmail.com',
        password: '123456'
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {})
  }
}
