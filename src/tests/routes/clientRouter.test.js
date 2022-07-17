const app = require('../../app')
const request = require('supertest')
const sinon = require('sinon')
const repository = require('../../repositories/clientRepository')

describe('Client route Tests', function () {
  describe('POST /login', function () {
    afterEach(function () {
      repository.findOneClient.restore()
    })

    it('respond with token and 200 code', function (done) {
      const repositoryMockedFunction = 'findOneClient'
      const requestBody = { email: 'luana@gmail.com', password: '345678' }
      const endPoint = '/login'
      const header = ['Accept', 'application/json']
      const expectedCode = 200

      const RepositoryMockedResponse = {
        dataValues: {
          token: '123456'
        }
      }

      sinon.stub(repository, repositoryMockedFunction).returns(RepositoryMockedResponse)

      request(app)
        .post(endPoint)
        .send(requestBody)
        .set(header)
        .expect(expectedCode)
        .end(function (err, res) {
          if (err) return done(err)
          done()
        })
    })

    it('respond with token and 400 code', function (done) {
      const repositoryMockedFunction = 'findOneClient'
      const requestBody = {}
      const endPoint = '/login'
      const header = ['Accept', 'application/json']
      const expectedCode = 400

      const RepositoryMockedResponse = {
        dataValues: {
          token: '123456'
        }
      }

      sinon.stub(repository, repositoryMockedFunction).returns(RepositoryMockedResponse)

      request(app)
        .post(endPoint)
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
