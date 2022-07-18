module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Transactions',
      [{
        id: 1,
        idClient: 1,
        idAsset: 1,
        qtAsset: 5,
        type: 'compra'
      },
      {
        id: 2,
        idClient: 1,
        idAsset: 2,
        qtAsset: 10,
        type: 'compra'
      },
      {
        id: 3,
        idClient: 2,
        idAsset: 2,
        qtAsset: 5,
        type: 'venda'
      },
      {
        id: 4,
        idClient: 2,
        idAsset: 2,
        qtAsset: 10,
        type: 'compra'
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {})
  }
}
