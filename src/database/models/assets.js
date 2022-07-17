const AssetShema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Assets', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nameAssest: DataTypes.STRING,
    qtdAssests: DataTypes.INTEGER,
    valueAssest: DataTypes.DECIMAL
  })

  return AssetTable
}

module.exports = AssetShema
