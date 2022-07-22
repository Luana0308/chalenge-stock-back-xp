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
      },
      {
        id: 3,
        nameAsset: 'Magalu',
        codAsset: 'MGL03',
        quantityAsset: 100,
        valueAsset: 12.0
      },
      {
        id: 4,
        nameAsset: 'Apple',
        codAsset: 'APL01',
        quantityAsset: 100,
        valueAsset: 100.0
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {})
  }
}
