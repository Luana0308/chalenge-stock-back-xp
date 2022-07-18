const transactionShema = (sequelize, DataTypes) => {
  const transactionTable = sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idClient: { type: DataTypes.INTEGER, foreignKey: true },
    idAsset: { type: DataTypes.INTEGER, foreignKey: true },
    qtAsset: DataTypes.INTEGER,
    type: DataTypes.STRING
  })

  transactionTable.associate = (models) => {
    transactionTable.belongsTo(models.Client,
      { foreignKey: 'idClient', as: 'client' })
  }

  transactionTable.associate = (models) => {
    transactionTable.belongsTo(models.Asset,
      { foreignKey: 'idAsset', as: 'asset' })
  }

  return transactionTable
}

module.exports = transactionShema
