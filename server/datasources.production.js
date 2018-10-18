module.exports = {
  sdjs: {
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    database: process.env.MONGODB_DB,
    password: process.env.MONGODB_PASSWORD,
    name: process.env.MONGODB_DB,
    user: process.env.MONGODB_USER,
    connector: 'loopback-connector-mongodb',
  },
};
