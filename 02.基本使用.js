// 创建对象
const xhr = new XMLHttpRequest();

// 配置请求
xhr.open('get', 'http://123.207.32.32:8000/home/multidata')

// 发送请求
xhr.send()

// 监听状态变化(4次变化)
// 1. 响应状态变化, open()方法执行完成
// 2. 响应头变化,   send()方法执行完成
// 3. 响应体变化,
// 4. 响应结束
xhr.onreadystatechange = () => {
    // 将字符串转为JSON
    console.log(xhr.readyState) // 2、3、4
    if (xhr.readyState !== XMLHttpRequest.DONE) return // 如果不是4,未完成
    // 确定拿到了数据(返回默认类型是普通字符串，//  xhr.responseType = 'json'  ===> 告知 xhr 响应结果是一个 JSON )
    const result = JSON.parse(xhr.response)
    console.log(result)
}
// 不会阻塞后续代码的执行
console.log('-----------------')