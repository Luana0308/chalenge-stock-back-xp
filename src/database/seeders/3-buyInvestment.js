module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BuyInvestments',
      [{
        id: 1,
        idClient: 1,
        idAsset: 1,
        quantityAsset: 5
      },
      {
        id: 2,
        idClient: 1,
        idAsset: 2,
        quantityAsset: 10
      },
      {
        id: 3,
        idClient: 2,
        idAsset: 1,
        quantityAsset: 10
      },
      {
        id: 4,
        idClient: 2,
        idAsset: 2,
        quantityAsset: 50
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BuyInvestments', null, {})
  }
}
