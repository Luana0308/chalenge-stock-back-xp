
function getHealthResponse (attributes) {
  return new Promise((resolve) => {
    resolve('O serviço está funcionando')
  })
}

module.exports = { getHealthResponse }
