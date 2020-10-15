const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// 解决跨域
app.use(cors())
// 解析请求的body
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
// 路由
app.use('/',router)

// 读取https证书和秘钥
const privateKey = fs.readFileSync('./https/2_wxlpg.hfxenergy.com.key')
const pem = fs.readFileSync('./https/1_wxlpg.hfxenergy.com_bundle.crt')
const credentials = {
  key: privateKey,
  cert: pem
}
// 创建https服务
const httpsServer = https.createServer(credentials,app)

const server = app.listen(5000,function () {
  const { address, port } = server.address()
  console.log('服务启动成功',address,port)
})

httpsServer.listen(18082,function () {
  console.log('服务启动成功',18082)
})

