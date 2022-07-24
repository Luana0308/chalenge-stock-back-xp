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
        idClient: 1,
        idAsset: 4,
        quantityAsset: 20
      },
      {
        id: 4,
        idClient: 1,
        idAsset: 6,
        quantityAsset: 20
      },
      {
        id: 5,
        idClient: 1,
        idAsset: 17,
        quantityAsset: 15
      },
      {
        id: 6,
        idClient: 1,
        idAsset: 13,
        quantityAsset: 10
      },
      {
        id: 7,
        idClient: 2,
        idAsset: 1,
        quantityAsset: 10
      },
      {
        id: 8,
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
