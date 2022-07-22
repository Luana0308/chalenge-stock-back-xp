const controller = require('../../controllers/assetController')
const service = require('../../services/assetService')
const sinon = require('sinon')
const { buildMockResponse } = require('../testUtils.js')

describe('Assets Controller Tests', function () {
  describe('getByAllAsset response', function () {
    beforeEach(function () {})

    afterEach(function () {
      service.getByAllAsset.restore()
    })

    it('should return expected value', async function () {
      const expectedResultJson = [
        {
          id: 1,
          nameAssest: 'Magalu',
          quantityAsset: 10,
          valueAssest: '2.80'
        },
        {
          id: 2,
          nameAssest: 'XP',
          quantityAsset: 100,
          valueAssest: '17.50'
        }
      ]
      const expectedResultCode = 200
      const serviceFunctionMocked = 'getByAllAsset'

      const mockReq = { }
      const mockRes = buildMockResponse()

      sinon.stub(service, serviceFunctionMocked).returns(expectedResultJson)
      await controller.getByAllAsset(mockReq, mockRes)

      sinon.assert.calledWith(mockRes.json, expectedResultJson)
      sinon.assert.calledWith(mockRes.status, expectedResultCode)
    })
  })

  describe('getByIdAsset response', function () {
    beforeEach(function () {})

    afterEach(function () {
      service.getByIdAsset.restore()
    })

    it('should return expected value', async function () {
      const expectedResultJson = {
        CodAtivo: 1,
        QtdeAtivo: 10,
        Valor: '2.80'
      }
      const expectedResultCode = 200
      const serviceFunctionMocked = 'getByIdAsset'

      const mockReq = { params: 1 }
      const mockRes = buildMockResponse()

      sinon.stub(service, serviceFunctionMocked).returns(expectedResultJson)
      await controller.getByIdAsset(mockReq, mockRes)

      sinon.assert.calledWith(mockRes.json, expectedResultJson)
      sinon.assert.calledWith(mockRes.status, expectedResultCode)
    })
  })
})
