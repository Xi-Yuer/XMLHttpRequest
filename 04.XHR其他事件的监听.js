const xhr = new XMLHttpRequest()

// 监听状态改变
xhr.onreadystatechange = () => { }
// 监听响应头改变
xhr.onload = () => { }
// 监听响应体改变
xhr.onloadend = () => { }
// 监听请求发送
xhr.onloadstart = () => { }
// 监听请求超时
xhr.ontimeout = () => { }
// 监听请求错误
xhr.onerror = () => { }
// 监听请求取消
xhr.onabort = () => { }
// 监听请求重定向
xhr.onredirect = () => { }
// 监听请求进度
xhr.onprogress = () => { }
// 监听请求停止
xhr.onabort = () => { }
// 监听请求完成
xhr.onloadend = () => { }
// 监听请求开始
xhr.onloadstart = () => { }

// 告知 xhr 响应结果是一个 JSON | XML | text | blob | arraybuffer
xhr.responseType = 'json'
// xhr.responseType = 'xml'

// json类型接口
// xhr.open('get', 'http://123.207.32.32:8000/home/multidata')
// xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_json")

// 文本类型接口
// xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_text")

// xml 类型接口
xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_xml")


xhr.send()

xhr.onload = () => {
    console.log(xhr.response)
}