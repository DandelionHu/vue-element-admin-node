const crypto = require('crypto')

function md5(s){
  // s 为String 类型，否则会报错
  return crypto.createHash('md5').update(String(s)).digest('hex')
}

module.exports = {
  md5
}
