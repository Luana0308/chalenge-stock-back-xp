const AssetShema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Assets', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nameAsset: DataTypes.STRING,
    qtdAssets: DataTypes.INTEGER,
    valueAsset: DataTypes.DECIMAL
  })

  AssetTable.associate = (models) => {
    AssetTable.hasMany(models.transaction,
      { foreignKey: 'idAsset', as: 'transaction' })
  }

  return AssetTable
}

module.exports = AssetShema
