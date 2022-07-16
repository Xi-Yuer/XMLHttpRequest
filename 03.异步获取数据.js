// 创建对象
const xhr = new XMLHttpRequest();

// 配置请求
// 异步请求，会等待服务器返回数据再执行下面的代码
xhr.open('get', 'http://123.207.32.32:8000/home/multidata', false)

// 发送请求
xhr.send()

console.log(JSON.parse(xhr.response))
// 请求结束后，才执行下面的代码
console.log('-----------------')