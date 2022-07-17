const ClientShema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define('Client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: false
  })

  return ClientTable
}

module.exports = ClientShema