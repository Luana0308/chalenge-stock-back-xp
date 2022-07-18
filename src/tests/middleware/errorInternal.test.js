const errorInternal = require('../../middleware/errorInternal')
const { buildMockResponse } = require('../testUtils.js')
const sinon = require('sinon')

describe('errorInternal', function () {
  describe('Midleware genericError', function () {
    beforeEach(function () {})

    afterEach(function () {})

    it('should return 500 and given message', async function () {
      const expectedResultJson = { message: 'some error message' }
      const expectedResultCode = 500

      const mockReq = {}
      const mockRes = buildMockResponse()
      const mockNext = () => {}

      errorInternal(new Error('some error message', { status: 500 }), mockReq, mockRes, mockNext)

      sinon.assert.calledWith(mockRes.json, expectedResultJson)
      sinon.assert.calledWith(mockRes.status, expectedResultCode)
    })
  })
})
