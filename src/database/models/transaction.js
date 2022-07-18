const transactionShema = (sequelize, DataTypes) => {
  const transactionTable = sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idClient: { type: DataTypes.INTEGER, foreignKey: true },
    idAsset: { type: DataTypes.INTEGER, foreignKey: true },
    qtAsset: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, { timestamps: false })

  transactionTable.associate = (models) => {
    transactionTable.belongsTo(models.Client,
      { foreignKey: 'idClient', as: 'client' })
  }

  transactionTable.associate = (models) => {
    transactionTable.belongsTo(models.Assets,
      { foreignKey: 'idAsset', as: 'asset' })
  }

  return transactionTable
}

module.exports = transactionShema
