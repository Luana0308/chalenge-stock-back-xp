const ClientSchema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define('Client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    value: DataTypes.DECIMAL
  }, {
    timestamps: false
  })

  ClientTable.associate = (models) => {
    ClientTable.hasMany(models.BuyInvestment,
      { foreignKey: 'idClient', as: 'BuyInvestment' })
  }

  ClientTable.associate = (models) => {
    ClientTable.hasMany(models.Transaction,
      { foreignKey: 'idClient', as: 'Transaction' })
  }

  return ClientTable
}

module.exports = ClientSchema
