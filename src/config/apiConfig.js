let config = {
  api: {
    apiPrefix: '/api/v1',
    apiPort: 3000
  },
  dataBase: {
    host: '127.0.0.1',
    user: 'postgres',
    database: 'WMS',
    password: '000000',
    port: 5432,
    // 扩展属性
    max: 20, // 连接池最大连接数
    idleTimeoutMillis: 3000, // 连接最大空闲时间 3s
    connectionTimeoutMillis: 2000
  }
}
export default config
