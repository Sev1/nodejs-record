// 引入模块
const http = require('http');
// 创建服务
http.createServer((req,res)=>{
  // 添加请求头
  res.writeHead(200,{'Content-Type':'text/plain'});
  // 输入内容
  res.end("hello world")

}).listen(8888);//监听端口

// 终端打印
console.log('server running at http://127.0.0.1:8888/')

// 常用包：
// node前端框架:express
// 读取文件：fs