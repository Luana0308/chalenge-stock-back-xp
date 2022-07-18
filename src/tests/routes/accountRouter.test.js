const request = require('supertest')
const sinon = require('sinon')
const repository = require('../../repositories/accountRepository')

// setup midleware
const middleware = require('../../middleware/authToken')
sinon.stub(middleware, 'authToken')
const app = require('../../app')

describe('Account route Tests', function () {
  describe('GET /account/:id', function () {
    beforeEach(function () {
      middleware.authToken.callsFake((req, res, next) => next())
    })
    afterEach(function () {
      repository.findClientById.restore()
    })

    it('respond with assets and 200 code', function (done) {
      const repositoryMockedFunction = 'findClientById'
      const requestBody = { }
      const endPoint = '/account/1'
      const header = ['Accept', 'application/json']
      const expectedCode = 200

      const RepositoryMockedResponse = {
        dataValues:
        {
          CodClient: 1,
          Saldo: 100.2
        }
      }

      sinon.stub(repository, repositoryMockedFunction).returns(RepositoryMockedResponse)

      request(app)
        .get(endPoint)
        .send(requestBody)
        .set(header)
        .expect(expectedCode)
        .end(function (err, res) {
          if (err) return done(err)
          done()
        })
    })
  })
})
