'use strict'
import DataBasePool from './dataPool'
class User {
  constructor () {
    this.name = 'aa'
  }
  /**
   * 获取所有用户信息
   * @returns Promise
   * @memberof User
   */
  getUsers () {
    return new Promise((resolve, reject) => {
      const pool = DataBasePool.getDataBasePoolInstance()
      pool.connect().then((client) => {
        client.query(`SELECT * FROM public.irrg_bu_userinfo;`).then((sqlResult) => {
          let res = {}
          if (sqlResult.rowCount >= 0) {
            res.status = 'success'
            res.data = sqlResult.rows
          }
          resolve(res)
        }, (err) => {
          console.log('数据库中查询出错', err)
          reject(err)
        })
      }, (err) => {
        console.log('查询客户端出错', err)
        reject(err)
      })
    })
  }
}

export default User
