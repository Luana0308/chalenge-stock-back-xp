module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [{
        id: 1,
        nameAsset: 'Magalu',
        qtdAssets: 10,
        valueAsset: 2.8
      },
      {
        id: 2,
        nameAsset: 'XP',
        qtdAssets: 100,
        valueAsset: 17.5
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {})
  }
}
