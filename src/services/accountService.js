const repository = require('../repositories/accountRepository')

const getByIdClientValue = async (id) => {
  const client = await repository.findClientById(id)
  return {
    CodClient: client.id,
    Saldo: +client.value
  }
}

module.exports = {
  getByIdClientValue
}
