const app = require('../../app')
const request = require('supertest')

describe('Health route Tests', function () {
  describe('GET /users', function () {
    it('respond with json', function (done) {
      request(app)
        .get('/health')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err)
          done()
        })
    })
  })
})
