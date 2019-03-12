let config = {
  port: 8080,
  privateKey: 'next-mobx-express-boilerplate',
  header: {
    token: 'x-access-token'
  },
  tokenName: 'next-token',
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10
  },
  apiEndPoint: 'http://localhost:8080/api',
  publicUrl: 'http://localhost:8080',
}

if (process.env.NODE_ENV == 'public-develop') {
}

if (process.env.NODE_ENV == 'production') {
}

module.exports = config