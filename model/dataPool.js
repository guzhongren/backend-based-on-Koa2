import config from '../config/apiConfig'
import pg from 'pg'
class DataBasePool {
  constructor () {
    // this._dataBaseConfig = config.dataBase
    // this._instance = null
    this.pool = {}
  }

  static getInstance () {
    return new Promise((resolve, reject) => {
      if (!DataBasePool.instance) {
        DataBasePool.instance = new DataBasePool()
        try {
          DataBasePool.pool = pg.Pool(config.dataBase)
          resolve(DataBasePool.pool)
        } catch (err) {
          let res = {}
          res.status = 500
          res.message = `数据库连接出错${err}`
          reject(res)
        }
      }
      resolve(DataBasePool.pool)
    })
  }
}

export default DataBasePool
