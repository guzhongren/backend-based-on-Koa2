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
      DataBasePool.getInstance().then((pool) => {
        pool.connect().then((client) => {
          console.log('test', client.err)
          if (client.err) {
            let e = {}
            e.status = 500
            e.message = `查询客户端出错${client.err}`
            reject(e)
          }

          client.query(`SELECT * FROM public.irrg_bu_userinfo;`)
            .then((sqlResult) => {
              let res = {}
              if (sqlResult.rowCount >= 0) {
                res.status = 'success'
                res.data = sqlResult.rows
              }
              client.release(true)
              resolve(res)
            })
            .catch(err => {
              let e = {}
              e.status = 500
              e.message = `查询语句执行出错${err}`
              reject(e)
            })
        })
      }, (err) => {
        reject(err)
      })
    })
  }
}

export default User
