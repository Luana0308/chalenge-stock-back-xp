const app = require('../../app')
const request = require('supertest')
const sinon = require('sinon')
const { authToken } = require('../../middleware/authToken')
const repository = require('../../repositories/accountRepository')

describe('Assets route Tests', function () {
  describe('GET /account/:id', function () {
    beforeEach(function () {
      sinon.stub(authToken).returns((req, res, next) => next())
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
