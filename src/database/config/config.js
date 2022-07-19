module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '080393',
    database: process.env.MYSQL_DB_NAME || 'stock-test-back-xp',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '080393',
    database: process.env.MYSQL_DB_NAME || 'stock-test-back-xp',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql'
  }
}
