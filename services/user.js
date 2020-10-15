const { querySql } = require('../db/index')
// 登录
function login(username,password) {
  return querySql(`select * from admin_user where username = '${username}' and password = '${password}'`)
}
module.exports = {
  login
}
