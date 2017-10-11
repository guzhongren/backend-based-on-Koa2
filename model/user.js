'use strict';
var config = require("../config/apiConfig");
var pg = require("pg");

let pool = pg.Pool(config.dataBase)
exports.getUser = () => {
  return new Promise((resolve, reject) => {
    pool.on('connect', () => {
      console.log("connect error!");
    });
    (async () => {
      const client = await pool.connect();
      try{
        let result = await client.query(`SELECT * FROM public."分类公路长度"`);
        resolve(result);
      }catch(err){
        reject(err);
      } finally {
        client.release();
      }
    })();
  })
};
