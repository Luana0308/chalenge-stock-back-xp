const AssetShema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Asset', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nameAsset: DataTypes.STRING,
    codAsset: DataTypes.STRING,
    qtdAssets: DataTypes.INTEGER,
    valueAsset: DataTypes.DECIMAL
  })

  AssetTable.associate = (models) => {
    AssetTable.hasMany(models.BuyInvestment,
      { foreignKey: 'idAsset', as: 'BuyInvestment' })
  }

  return AssetTable
}

module.exports = AssetShema
