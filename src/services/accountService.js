const repository = require('../repositories/accountRepository')
const { Client } = require('../database/models')

const getByIdClientValue = async (id) => {
  const client = await repository.findClientById(id)
  return {
    CodClient: client.id,
    Saldo: +client.value
  }
}
const postDepositClient = async (token, deposit) => {
  const { id } = token
  const { value } = deposit

  const client = await repository.findClientById(id)

  const some = +client.value + +value

  await Client.update({ id, value: some }, { where: { id } })

  return {
    CodClient: id,
    valor: value
  }
}

module.exports = {
  getByIdClientValue,
  postDepositClient
}
