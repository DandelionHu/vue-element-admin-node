const express = require('express')

const app = express()

app.get('/',function (req,res) {
  res.send('hello')
})

const server = app.listen(5000,function () {
  const { address, port } = server.address()
  console.log('服务启动成功',address,port)
})
