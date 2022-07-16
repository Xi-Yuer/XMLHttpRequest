document.querySelector('.btn').onclick = () => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json'

    // 传递方式一：( get 明文传输)
    // xhr.open('get', 'http://123.207.32.32:1888/02_param/get?name=张三&age=18&address=北京');

    // 传递方式二： urlencoded (post 密文传输)

    // xhr.open('post', 'http://123.207.32.32:1888/02_param/posturl');


    // 放入请求体
    // 告知服务器传递过去的数据局类型
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.send('name=张三&age=18&address=北京')


    // 传递方式三： form (post 密文传输)
    // const formEl = document.querySelector('.info')
    // xhr.open('post', "http://123.207.32.32:1888/02_param/postform")
    // const formDate = new FormData(formEl);
    // xhr.send(formDate);


    // 传递方式四： json
    xhr.open('post', 'http://123.207.32.32:1888/02_param/postjson')

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({ name: '张三', age: 18, address: '北京' }))

    xhr.onload = () => {
        console.log(xhr.response);
    }
}