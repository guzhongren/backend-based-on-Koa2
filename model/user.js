'use strict';
var config = require("../config/apiConfig");
var pg = require("pg");

let pool = pg.Pool(config.dataBase)
exports.getUser = async() => {
  pool.on('connect', function () {
    console.log("connect Event")
  });
  await pool.connect((err, client, done) => {
    if (err) {
      return console.log("error fetch client form pool", err);
    } else {
      return new Promise((resolve, reject) => {
        let query = client.query('SELECT * FROM public."分类公路长度"', (err, result) => {
          return new Promise((resolve, reject) => {
            console.log(result)
            client.end();
            err ? reject(err) : resolve(result);
          })
        });
      });
    }
  });
  // ctx.body = {
  //   status: 1,
  //   data: {
  //     userName: "test",
  //     id: 1
  //   }
  // }
  // next();
};
