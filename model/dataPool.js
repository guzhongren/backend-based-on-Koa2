import config from '../config/apiConfig'
import pg from 'pg'
class DataBasePool {
  constructor () {
    // this._dataBaseConfig = config.dataBase
    // this._instance = null
    this.pool = pg.Pool(config.dataBase)
  }

  static getDataBasePoolInstance () {
    if (!DataBasePool.instance) {
      DataBasePool.instance = new DataBasePool()
      // pool.on('error', (err) => {
      //   console.error('Unexpected error on edle client', err)
      // })
      // pool.connect().then((client) => {
      //   return client
      // }, (err) => {
      //   return console.log('获取数据库客户端出错', err)
      // })
    }
    return DataBasePool.instance.pool
  }
}

export default DataBasePool
