const buyInvetmentShema = (sequelize, DataTypes) => {
  const buyInvetmentTable = sequelize.define('BuyInvestment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idClient: { type: DataTypes.INTEGER, foreignKey: true },
    idAsset: { type: DataTypes.INTEGER, foreignKey: true },
    quantityAsset: DataTypes.INTEGER
  })

  buyInvetmentTable.associate = (models) => {
    buyInvetmentTable.belongsTo(models.Client,
      { foreignKey: 'idClient', as: 'client' })
  }

  buyInvetmentTable.associate = (models) => {
    buyInvetmentTable.belongsTo(models.Asset,
      { foreignKey: 'idAsset', as: 'asset' })
  }

  return buyInvetmentTable
}

module.exports = buyInvetmentShema
