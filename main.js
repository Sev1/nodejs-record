var fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log('读取text文件数据：'+data.toString());
console.log("程序执行结束");
// 程序输出结果
// 读取到的数据：这就是一个纯文本的文件，你读取到我了。
// 程序执行结束



// 非阻塞代码写法-回调函数
/*fs.readFile('text.txt',function(err,data){
  if(err) return console.log(err);
  console.log('读取text文件数据：'+data.toString());
})
console.log("程序执行结束");*/

// 程序输出结果
// 程序执行结束
// 读取到的数据：这就是一个纯文本的文件，你读取到我了。
