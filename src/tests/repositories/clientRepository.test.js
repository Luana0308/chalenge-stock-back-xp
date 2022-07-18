const model = require('../../database/models')
const repository = require('../../repositories/clientRepository')
const sinon = require('sinon')
const { expect } = require('chai')

describe('Client Repository Tests', function () {
  describe('findOneClient response', function () {
    const spy = sinon.spy(model.Client, 'findOne')

    beforeEach(function () {})

    afterEach(function () {})

    it('should return expected value', async function () {
      const expectedResponse = [
        {
          attributes: ['id', 'name', 'email'],
          where: { email: 'firstValue', password: 'secondValue' }
        }
      ]
      repository.findOneClient('firstValue', 'secondValue')

      expect(spy.callCount).equal(1)
      expect(spy.getCall(0).args).to.eql(expectedResponse)
    })
  })
})
