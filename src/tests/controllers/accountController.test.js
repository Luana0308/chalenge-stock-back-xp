const controller = require('../../controllers/accountController')
const service = require('../../services/accountService')
const sinon = require('sinon')
const { buildMockResponse } = require('../testUtils.js')

describe('Account Controller Tests', function () {
  describe('getByIdClientValue response', function () {
    beforeEach(function () {})

    afterEach(function () {
      service.getByIdClientValue.restore()
    })

    it('should return expected value', async function () {
      const expectedResultJson =
      {
        CodClient: 1,
        Saldo: 100.2
      }
      const expectedResultCode = 200
      const serviceFunctionMocked = 'getByIdClientValue'

      const mockReq = { params: 1 }
      const mockRes = buildMockResponse()

      sinon.stub(service, serviceFunctionMocked).returns(expectedResultJson)
      await controller.getByIdClientValue(mockReq, mockRes)

      sinon.assert.calledWith(mockRes.json, expectedResultJson)
      sinon.assert.calledWith(mockRes.status, expectedResultCode)
    })
  })
})
