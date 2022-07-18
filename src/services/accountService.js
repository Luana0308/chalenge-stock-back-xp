const repository = require('../repositories/accountRepository')
const { Client } = require('../database/models')
const { messageErrorWithdrawInvalid } = require('../utils/messagesErrors')

const getByIdClientValue = async (id) => {
  const client = await repository.findClientById(id)
  return {
    CodClient: client.id,
    Saldo: +client.value
  }
}

const postWithdrawClient = async (token, deposit) => {
  const { id } = token
  const { value } = deposit

  const client = await repository.findClientById(id)

  if (value > client.value) {
    throw messageErrorWithdrawInvalid
  }

  const withdraw = +client.value - +value

  await Client.update({ id, value: withdraw }, { where: { id } })

  return {
    CodClient: id,
    valor: value
  }
}

const postDepositClient = async (token, deposit) => {
  const { id } = token
  console.log('id do token', id)
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
  postDepositClient,
  postWithdrawClient
}
