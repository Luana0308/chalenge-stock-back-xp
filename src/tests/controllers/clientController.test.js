const controller = require('../../controllers/clientLoginController')
const service = require('../../services/clientLoginService')
const sinon = require('sinon')
const { buildMockResponse } = require('../testUtils.js')

describe('Client Controller Tests', function () {
  describe('get client response', function () {
    beforeEach(function () {})

    afterEach(function () {
      service.authenticationLogin.restore()
    })

    it('should return expected value', async function () {
      const expectedResultJson = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1YW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiNDU2Nzg5IiwiaWF0IjoxNjU4MDY5MDg0LCJleHAiOjE2NTgwNzI2ODR9.Jd8wTfYCoGb_8ZqQrbbzBvOLtmT2bfg4m0aT4ZN6y2o'
      }
      const expectedResultCode = 200
      const serviceFunctionMocked = 'authenticationLogin'

      const mockReq = {
        body: {
          email: 'luana@gmail.com',
          password: '456789'
        }
      }
      const mockRes = buildMockResponse()

      sinon.stub(service, serviceFunctionMocked).returns(expectedResultJson)
      await controller.autheticationLogin(mockReq, mockRes)

      sinon.assert.calledWith(mockRes.json, expectedResultJson)
      sinon.assert.calledWith(mockRes.status, expectedResultCode)
    })
  })
})
