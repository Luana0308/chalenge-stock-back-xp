const controller = require('../../controllers/healthController')
const service = require('../../services/healthService')
const sinon = require('sinon')

describe('62536251', async () => {
  afterEach(() => {
    sinon.restore()
  })
  it('should create', async () => {
    const mockResult = 'some response'
    sinon.stub(service, 'getHealthResponse').resolves(mockResult)

    const mockRequest = { body: {} }
    const mockResponse = { send: sinon.stub() }

    await controller.getHealth(mockRequest, mockResponse)

    sinon.assert.calledWith(mockResponse.send, 'some response')
    // sinon.assert.calledWith(mReply.code, 201)
  })
})
