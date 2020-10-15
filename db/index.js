const mysql = require('mysql')
const config = require('./config')
const { debug } = require('../utils/constant')

// 建立连接
function connect(){
  return mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements:true
  })
}
// 查询
function querySql(sql) {
  // 建立连接
  const conn = connect()
  // 日志
  debug && console.log(sql)
  return new Promise((resolve,reject)=>{
    try {
      conn.query(sql,(err,results)=>{
        if (err) {
          debug && console.log('查询失败，原因：'+JSON.stringify(err))
          reject(err)
        } else {
          debug && console.log('查询成功'+JSON.stringify(results))
          resolve(results)
        }
      })
    } catch (e) {
      reject(e)
    } finally {
      // 释放
      conn.end()
    }
  })
  // 释放
  conn.end()
}

module.exports = {
  querySql
}
