const repository = require('../repositories/accountRepository')
const { Client } = require('../database/models')
const { messageErrorWithdrawInvalid } = require('../utils/messagesErrors')

const getByIdClientValue = async (id) => {
  const client = await repository.findClientById(id)
  return client
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
    nome: client.name,
    valorSaque: value,
    valorAtualConta: withdraw
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
    nome: client.name,
    valor: value,
    valorAtualConta: some
  }
}

module.exports = {
  getByIdClientValue,
  postDepositClient,
  postWithdrawClient
}
