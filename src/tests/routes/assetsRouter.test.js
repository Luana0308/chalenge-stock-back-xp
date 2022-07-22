const app = require('../../app')
const request = require('supertest')
const sinon = require('sinon')
const repository = require('../../repositories/assetRepository')

describe('Assets route Tests', function () {
  describe('GET /assets', function () {
    afterEach(function () {
      repository.findAsset.restore()
    })

    it('respond with assets and 200 code', function (done) {
      const repositoryMockedFunction = 'findAsset'
      const requestBody = { }
      const endPoint = '/assets'
      const header = ['Accept', 'application/json']
      const expectedCode = 200

      const RepositoryMockedResponse = {
        dataValues: [
          {
            id: 1,
            nameAsset: 'Magalu',
            quantityAsset: 10,
            valueAsset: '2.80'
          },
          {
            id: 2,
            nameAssest: 'XP',
            quantityAsset: 100,
            valueAsset: '17.50'
          }
        ]
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

  describe('GET /assets/:id', function () {
    afterEach(function () {
      repository.findAssetByPk.restore()
    })

    it('respond with assets and 200 code', function (done) {
      const repositoryMockedFunction = 'findAssetByPk'
      const requestBody = { }
      const endPoint = '/assets/1'
      const header = ['Accept', 'application/json']
      const expectedCode = 200

      const RepositoryMockedResponse = {
        dataValues:
        {
          CodAtivo: 1,
          QtdeAtivo: 10,
          Valor: '2.80'
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
