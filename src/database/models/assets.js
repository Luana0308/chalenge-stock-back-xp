const AssetShema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Assets', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nameAsset: DataTypes.STRING,
    qtdAssets: DataTypes.INTEGER,
    valueAsset: DataTypes.DECIMAL
  })

  return AssetTable
}

module.exports = AssetShema
