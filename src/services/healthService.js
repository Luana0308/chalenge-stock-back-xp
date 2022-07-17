
function getHealthResponse (_body) {
  return new Promise((resolve) => {
    resolve('O serviço está funcionando')
  })
}

module.exports = { getHealthResponse }
