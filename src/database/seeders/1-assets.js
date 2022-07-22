module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [{
        id: 1,
        nameAsset: 'Magalu',
        codAsset: 'MGLU3',
        quantityAsset: 100,
        valueAsset: 2.8
      },
      {
        id: 2,
        nameAsset: 'XP',
        codAsset: 'XPBR31',
        quantityAsset: 100,
        valueAsset: 17.5
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {})
  }
}
