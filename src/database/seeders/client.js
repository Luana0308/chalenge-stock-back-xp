module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [{
        id: 1,
        name: 'luana Ferreira',
        email: 'luana@gmail.com',
        password: '123456',
        value: 100.20
      },
      {
        id: 2,
        name: 'tony Stark',
        email: 'tony@gmail.com',
        password: '123456',
        value: 100.00
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {})
  }
}
