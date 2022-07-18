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
    ClientTable.hasMany(models.transaction,
      { foreignKey: 'idClient', as: 'transaction' })
  }

  return ClientTable
}

module.exports = ClientSchema
