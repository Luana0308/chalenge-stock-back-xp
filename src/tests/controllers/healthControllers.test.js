const controller = require('../../controllers/healthController')
const service = require('../../services/healthService')
const sinon = require('sinon')
const { buildMockResponse } = require('../testUtils.js')

describe('Health Controller Tests', function () {
  describe('get health response', function () {
    beforeEach(function () {})

    afterEach(function () {
      service.getHealthResponse.restore()
    })

    it('should return expected value', async function () {
      const expectedResultJson = 'some response'
      const expectedResultCode = 200
      const serviceFunctionMocked = 'getHealthResponse'

      const mockReq = { body: {} }
      const mockRes = buildMockResponse()

      sinon.stub(service, serviceFunctionMocked).returns(expectedResultJson)
      await controller.getHealth(mockReq, mockRes)

      sinon.assert.calledWith(mockRes.json, expectedResultJson)
      sinon.assert.calledWith(mockRes.status, expectedResultCode)
    })
  })
})
