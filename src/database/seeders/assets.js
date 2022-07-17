module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [{
        id: 1,
        nameAssest: 'Magalu',
        qtdAssests: 10,
        valueAssest: 2.8
      },
      {
        id: 2,
        nameAssest: 'XP',
        qtdAssests: 100,
        valueAssest: 17.5
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {})
  }
}
