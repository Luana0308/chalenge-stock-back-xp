const sinon = require('sinon')

const buildMockResponse = () => {
  const res = {}
  res.status = sinon.stub().returns(res)
  res.json = sinon.stub().returns(res)
  return res
}

module.exports = { buildMockResponse }
