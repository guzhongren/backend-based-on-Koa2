'use strict'
import config from '../config/apiConfig'
import pg from 'pg'

/**
 * 获取所有用户
 */
const getUser = () => {
  return new Promise((resolve, reject) => {
    let pool = pg.Pool(config.dataBase)
    pool.on('error', (err) => {
      console.error('Unexpected error on edle client', err)
    })
    pool.connect().then((client) => {
      client.query(`SELECT * FROM public."分类公路长度"`).then((sqlResult) => {
        let res = {}
        if (sqlResult.rowCount >= 0) {
          res.status = 'success'
          res.data = sqlResult.rows
        }
        resolve(res)
      }, (err) => {
        console.log('数据库中查询出错', err)
      })
    }, (err) => {
      console.log('查询出错', err)
      reject(err)
    })
  })
}

export {getUser}
