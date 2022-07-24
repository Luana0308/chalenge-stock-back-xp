module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [{
        id: 1,
        nameAsset: 'Magalu',
        codAsset: 'MGLU3',
        quantityAsset: 100,
        valueAsset: 5.8
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
        nameAsset: 'Enjoei',
        codAsset: 'ENJ01',
        quantityAsset: 100,
        valueAsset: 12.0
      },
      {
        id: 4,
        nameAsset: 'Apple',
        codAsset: 'APL01',
        quantityAsset: 100,
        valueAsset: 100.0
      },
      {
        id: 5,
        nameAsset: 'Americanas',
        codAsset: 'AMER3',
        quantityAsset: 100,
        valueAsset: 15.93
      },
      {
        id: 6,
        nameAsset: 'Renner',
        codAsset: 'LREN3',
        quantityAsset: 100,
        valueAsset: 24.42
      },
      {
        id: 7,
        nameAsset: 'Nike',
        codAsset: 'NIKE34',
        quantityAsset: 100,
        valueAsset: 61.41
      },
      {
        id: 8,
        nameAsset: 'Azul',
        codAsset: 'AZUL4',
        quantityAsset: 100,
        valueAsset: 11.58
      },
      {
        id: 9,
        nameAsset: 'Amazon',
        codAsset: 'AMZO34',
        quantityAsset: 100,
        valueAsset: 4.24
      },
      {
        id: 10,
        nameAsset: 'Petrobras',
        codAsset: 'PETR4',
        quantityAsset: 100,
        valueAsset: 29.33
      },
      {
        id: 11,
        nameAsset: 'MRV',
        codAsset: 'MRVE3',
        quantityAsset: 100,
        valueAsset: 8.68
      },
      {
        id: 12,
        nameAsset: 'Copasa',
        codAsset: 'CSMG3',
        quantityAsset: 100,
        valueAsset: 11.77
      },
      {
        id: 13,
        nameAsset: 'Cemig',
        codAsset: 'CMIG4',
        quantityAsset: 100,
        valueAsset: 10.65
      },
      {
        id: 14,
        nameAsset: 'Gol',
        codAsset: 'GOLL4',
        quantityAsset: 100,
        valueAsset: 7.97
      },
      {
        id: 15,
        nameAsset: 'Netflix',
        codAsset: 'NFLX34',
        quantityAsset: 100,
        valueAsset: 24.28
      },
      {
        id: 16,
        nameAsset: 'Coca Cola',
        codAsset: 'COCA34',
        quantityAsset: 100,
        valueAsset: 56.00
      },
      {
        id: 17,
        nameAsset: 'Disney',
        codAsset: 'DISB34',
        quantityAsset: 100,
        valueAsset: 37.50
      },
      {
        id: 18,
        nameAsset: 'Micrsoft',
        codAsset: 'MSFT34',
        quantityAsset: 100,
        valueAsset: 59.45
      },
      {
        id: 19,
        nameAsset: 'Pão de Açucar',
        codAsset: 'PCAR3',
        quantityAsset: 100,
        valueAsset: 16.90
      },
      {
        id: 20,
        nameAsset: 'Ambev',
        codAsset: 'ABEV3',
        quantityAsset: 100,
        valueAsset: 15.51
      }
      ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {})
  }
}
